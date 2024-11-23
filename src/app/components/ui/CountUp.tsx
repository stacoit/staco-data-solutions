'use client';

import { useEffect, useRef, useState } from 'react';
import { useInView } from 'framer-motion';

interface CountUpProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  decimals?: number;
  separator?: string;
}

export default function CountUp({
  end,
  duration = 2,
  prefix = '',
  suffix = '',
  decimals = 0,
  separator = ','
}: CountUpProps) {
  const [count, setCount] = useState(0);
  const countRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(countRef, { once: true, margin: "-100px" });
  const frameRate = 1000 / 60;
  const totalFrames = Math.round(duration * 60);

  const startAnimation = () => {
    let frame = 0;
    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const currentCount = Math.round(end * progress);

      if (frame === totalFrames) {
        setCount(end);
        clearInterval(counter);
      } else {
        setCount(currentCount);
      }
    }, frameRate);

    return () => clearInterval(counter);
  };

  useEffect(() => {
    if (isInView) {
      startAnimation();
    }
  }, [end, totalFrames, isInView, frameRate]);

  const formatNumber = (num: number) => {
    const parts = num.toFixed(decimals).split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, separator);
    return parts.join('.');
  };

  return (
    <span ref={countRef} className="inline-block">
      {isInView && `${prefix}${formatNumber(count)}${suffix}`}
    </span>
  );
}
