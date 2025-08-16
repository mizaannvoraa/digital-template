'use client';
import { useState, useEffect } from 'react';
import Image from 'next/image';

const Banner = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Handle mouse movement for parallax effect
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth) * 100;
    const y = (clientY / innerHeight) * 100;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <div 
      id="home"
      className="relative w-full h-screen overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image Container */}
      <div className="absolute inset-0 w-full h-full">
        {/* Main Banner Image */}
        <div 
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            isLoaded ? 'scale-100 opacity-100' : 'scale-110 opacity-0'
          }`}
          style={{
            transform: `translate(${(mousePosition.x - 50) * 0.02}px, ${(mousePosition.y - 50) * 0.02}px) scale(${isLoaded ? 1 : 1.1})`
          }}
        >
          <Image
            src="/assets/trialbanner.jpg" // Update with your banner image path
            alt="NEBRO Banner - Modern Technology"
            fill
            priority
            className="object-cover object-center"
            quality={90}
            onLoad={() => setIsLoaded(true)}
          />
        </div>

        {/* Gradient Overlays for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>
      </div>

      {/* Banner Text Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 
            className={`text-white font-bold leading-tight transition-all duration-1000 ease-out transform ${
              isLoaded 
                ? 'translate-y-0 opacity-100' 
                : 'translate-y-10 opacity-0'
            } text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl`}
            style={{
              textShadow: '2px 2px 4px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.3)'
            }}
          >
            Fresh ideas, crafted for a digital world
          </h1>
        </div>
      </div>

      {/* CSS for additional animations */}
      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-size: 200% 200%;
            background-position: left center;
          }
          50% {
            background-size: 200% 200%;
            background-position: right center;
          }
        }

        .animate-gradient-x {
          animation: gradient-x 3s ease infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-3000 {
          animation-delay: 3s;
        }

        @media (max-width: 640px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }

        /* Custom responsive text shadows for better readability */
        @media (max-width: 640px) {
          h1 {
            text-shadow: 2px 2px 4px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.5) !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Banner;