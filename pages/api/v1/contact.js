import nodemailer from 'nodemailer';
import Imap from 'imap';  // IMAP library

// Track the last time an email was sent (in milliseconds)
let lastEmailSent = 0;
const rateLimitWindow = 60000;  // 1 minute in milliseconds

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Destructure name, email, and message from the request body
        const { name, email, message } = req.body;

        // Validate inputs: Ensure all fields are present
        if (!name || !email || !message) {
            return res.status(400).json({ error: 'All fields are required.' });
        }

        // Validate email format
        const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailRegex.test(email)) {
            return res.status(400).json({ error: 'Invalid email address.' });
        }

        const senderEmail = process.env.TITAN_EMAIL_USER;
        const senderPassword = process.env.TITAN_EMAIL_PASS;
        const recipientEmail = process.env.ADMIN_EMAIL;
        const subject = `Contact Form Submission from ${name}`;
        const body = `<p><strong>Message from ${name} (${email}):</strong></p><p>${message}</p>`;

        // SMTP (sending) server details
        const smtpServer = 'smtp.titan.email';
        const smtpPort = 587;

        // IMAP (receiving) server details
        const imapServer = 'imap.titan.email';
        const imapPort = 993;

        // Check if the rate limit window has passed
        const now = Date.now();
        if (now - lastEmailSent < rateLimitWindow) {
            const remainingTime = rateLimitWindow - (now - lastEmailSent);
            return res.status(429).json({ error: `Too many requests. Please wait ${Math.ceil(remainingTime / 1000)} seconds.`, secondsRemaining : Math.ceil(remainingTime / 1000) });
        }

        // Update the last email sent time
        lastEmailSent = now;

        try {
            // Create a nodemailer transporter using SMTP
            const transporter = nodemailer.createTransport({
                host: smtpServer,
                port: smtpPort,
                auth: {
                    user: senderEmail,
                    pass: senderPassword,
                },
            });

            // Create the email options
            const mailOptions = {
                from: senderEmail,
                to: recipientEmail,
                subject: subject,
                html: body,
            };

            // Send the email
            const info = await transporter.sendMail(mailOptions);
            console.log('Email sent successfully.');
            console.log('Info object:', info);

            // Append the sent email to the "Sent" folder using IMAP
            const imap = new Imap({
                user: senderEmail,
                password: senderPassword,
                host: imapServer,
                port: imapPort,
                tls: true,
            });

            imap.once('ready', () => {
                // Open the "Sent" folder
                imap.openBox('Sent', true, (err) => {
                    if (err) {
                        console.error('Error opening "Sent" folder:', err);
                        imap.end();
                        return;
                    }

                    // Create the email message in MIME format
                    const emailMessage = `From: ${senderEmail}\r\nTo: ${recipientEmail}\r\nSubject: ${subject}\r\n\r\n${body}`;

                    // Append the sent email to the "Sent" folder
                    imap.append(emailMessage, { mailbox: 'Sent' }, (appendErr) => {
                        if (appendErr) {
                            console.error('Error appending email to "Sent" folder:', appendErr);
                        } else {
                            console.log('Email appended to "Sent" folder.');
                        }
                        imap.end();
                    });
                });
            });

            imap.once('error', (imapErr) => {
                console.error('IMAP Error:', imapErr);
            });

            // Connect to the IMAP server
            imap.connect();

            // Return a success response
            return res.status(200).json({ message: 'Your message has been sent successfully!' });

        } catch (error) {
            console.error('Error sending email:', error);
            return res.status(500).json({ error: 'There was an error sending the message.' });
        }
    } else {
        // Handle unsupported HTTP methods
        return res.status(405).json({ error: 'Method Not Allowed' });
    }
}
