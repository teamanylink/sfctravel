"use client";

import { useEffect, useState } from "react";

interface CountdownTimerProps {
  deadline: string;
}

export default function CountdownTimer({ deadline }: CountdownTimerProps) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const targetDate = new Date(deadline).getTime();

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        });
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [deadline]);

  return (
    <div className="flex gap-3 sm:gap-6">
      {Object.entries(timeLeft).map(([unit, value]) => (
        <div key={unit} className="flex flex-col items-center">
          <div className="w-14 h-16 sm:w-20 sm:h-24 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 flex items-center justify-center mb-3 shadow-[0_8px_32px_rgba(0,0,0,0.12)]">
            <span className="font-serif text-3xl sm:text-5xl text-white font-light tracking-tight">
              {value.toString().padStart(2, '0')}
            </span>
          </div>
          <span className="text-[9px] sm:text-[11px] font-light tracking-[0.25em] text-white/50 uppercase">{unit}</span>
        </div>
      ))}
    </div>
  );
}
