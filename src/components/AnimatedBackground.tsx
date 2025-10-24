import { useEffect, useState } from 'react';

export function AnimatedBackground() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-gray-900 to-black" />
      
      {/* Grid pattern - white/gray */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
          transform: `translateY(${scrollY * 0.2}px)`,
          opacity: 0.6
        }}
      />

      {/* Larger grid overlay */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(255, 255, 255, 0.08) 2px, transparent 2px),
            linear-gradient(to bottom, rgba(255, 255, 255, 0.08) 2px, transparent 2px)
          `,
          backgroundSize: '120px 120px',
          transform: `translateY(${scrollY * -0.15}px)`,
          opacity: 0.4
        }}
      />

      {/* Diagonal lines - moving in opposite direction */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              45deg,
              transparent,
              transparent 35px,
              rgba(255, 255, 255, 0.08) 35px,
              rgba(255, 255, 255, 0.08) 37px
            )
          `,
          transform: `translateY(${scrollY * -0.2}px) translateX(${scrollY * 0.15}px)`,
          opacity: 0.5
        }}
      />

      {/* Diagonal lines - opposite angle */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -45deg,
              transparent,
              transparent 50px,
              rgba(255, 255, 255, 0.08) 50px,
              rgba(255, 255, 255, 0.08) 52px
            )
          `,
          transform: `translateY(${scrollY * 0.15}px) translateX(${scrollY * -0.2}px)`,
          opacity: 0.5
        }}
      />

      {/* Vertical lines - futuristic scan effect */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              to right,
              transparent,
              transparent 80px,
              rgba(255, 255, 255, 0.12) 80px,
              rgba(255, 255, 255, 0.12) 82px,
              transparent 82px,
              transparent 84px,
              rgba(255, 255, 255, 0.06) 84px,
              rgba(255, 255, 255, 0.06) 85px
            )
          `,
          transform: `translateY(${scrollY * 0.3}px)`,
          opacity: 0.4
        }}
      />

      {/* Horizontal lines - tech grid effect */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              to bottom,
              transparent,
              transparent 100px,
              rgba(255, 255, 255, 0.1) 100px,
              rgba(255, 255, 255, 0.1) 101px,
              transparent 101px,
              transparent 150px,
              rgba(255, 255, 255, 0.05) 150px,
              rgba(255, 255, 255, 0.05) 151px
            )
          `,
          transform: `translateY(${scrollY * -0.25}px)`,
          opacity: 0.4
        }}
      />

      {/* Randomized angled lines */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              25deg,
              transparent,
              transparent 45px,
              rgba(255, 255, 255, 0.08) 45px,
              rgba(255, 255, 255, 0.08) 46px
            )
          `,
          transform: `translateY(${scrollY * 0.12}px) translateX(${scrollY * 0.08}px)`,
          opacity: 0.4
        }}
      />

      {/* Another angle for complexity */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: `
            repeating-linear-gradient(
              -65deg,
              transparent,
              transparent 70px,
              rgba(255, 255, 255, 0.08) 70px,
              rgba(255, 255, 255, 0.08) 71px
            )
          `,
          transform: `translateY(${scrollY * -0.18}px) translateX(${scrollY * 0.12}px)`,
          opacity: 0.35
        }}
      />

      {/* Animated gradient orbs - cyan accent */}
      <div 
        className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollY * 0.4}px)`,
        }}
      />
      <div 
        className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollY * -0.3}px)`,
        }}
      />
      
      {/* Additional accent orbs */}
      <div 
        className="absolute top-1/2 right-1/3 w-64 h-64 bg-white/2 rounded-full blur-3xl"
        style={{
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      />
    </div>
  );
}
