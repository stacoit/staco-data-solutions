import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the pathname from the request
  const pathname = request.nextUrl.pathname

  // If the request is for an existing asset or already has an extension, let it pass through
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.') ||
    pathname.startsWith('/static')
  ) {
    return NextResponse.next()
  }

  // Handle root path
  if (pathname === '/') {
    return NextResponse.rewrite(new URL('/index.html', request.url))
  }

  // Remove trailing slash if it exists
  const cleanPath = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname

  // For all other routes, rewrite to the correct HTML file
  const url = new URL(request.url)
  url.pathname = `${cleanPath}.html`
  
  return NextResponse.rewrite(url)
}

// Configure which routes should be handled by this middleware
export const config = {
  matcher: [
    /*
     * Match all paths except:
     * 1. /api routes
     * 2. /_next routes
     * 3. /static routes
     * 4. All files with extensions (.jpg, .png, etc.)
     */
    '/((?!api|_next|static|.*\\.[^/]*$).*)'
  ]
}
