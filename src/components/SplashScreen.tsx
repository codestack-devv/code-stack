import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import logoImage from "@/assets/logo-main.png";

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [startY, setStartY] = useState(0);
  const [currentY, setCurrentY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    // Prevent scrolling when splash is visible
    if (isVisible) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isVisible]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartY(e.clientY);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const diff = startY - e.clientY;
    if (diff > 0) {
      setCurrentY(diff);
    }
  };

  const handleMouseUp = () => {
    if (currentY > 100) {
      setIsVisible(false);
    } else {
      setCurrentY(0);
    }
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartY(e.touches[0].clientY);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging) return;
    const diff = startY - e.touches[0].clientY;
    if (diff > 0) {
      setCurrentY(diff);
    }
  };

  const handleTouchEnd = () => {
    if (currentY > 100) {
      setIsVisible(false);
    } else {
      setCurrentY(0);
    }
    setIsDragging(false);
  };

  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-gradient-to-br from-background via-secondary to-background transition-transform duration-300"
      style={{ transform: `translateY(-${currentY}px)` }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <div className="text-center space-y-8 animate-fade-in">
        <img
          src={logoImage}
          alt="CodeStack Logo"
          className="w-32 h-32 mx-auto rounded-2xl shadow-glow"
        />
        <h1 className="text-6xl md:text-7xl font-bold font-['Poppins'] bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
          CodeStack
        </h1>
        <div className="flex flex-col items-center space-y-4 animate-pulse">
          <ChevronUp className="w-8 h-8 text-accent" />
          <p className="text-muted-foreground text-lg">Swipe up to enter</p>
        </div>
      </div>
    </div>
  );
};

export default SplashScreen;
