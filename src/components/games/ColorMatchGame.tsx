import { useState, useEffect, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ColorMatchGame = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isPlaying, setIsPlaying] = useState(false);
  const [targetColor, setTargetColor] = useState("");
  const [options, setOptions] = useState<string[]>([]);
  const [highScore, setHighScore] = useState(0);

  const colors = [
    { name: "Red", hex: "#ef4444" },
    { name: "Blue", hex: "#3b82f6" },
    { name: "Green", hex: "#22c55e" },
    { name: "Yellow", hex: "#eab308" },
    { name: "Purple", hex: "#a855f7" },
    { name: "Pink", hex: "#ec4899" },
    { name: "Orange", hex: "#f97316" },
    { name: "Cyan", hex: "#06b6d4" }
  ];

  const generateRound = useCallback(() => {
    const shuffled = [...colors].sort(() => Math.random() - 0.5);
    const correct = shuffled[0];
    const opts = shuffled.slice(0, 4).sort(() => Math.random() - 0.5);
    setTargetColor(correct.name);
    setOptions(opts.map(c => c.hex));
  }, []);

  useEffect(() => {
    if (isPlaying && timeLeft > 0) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && isPlaying) {
      setIsPlaying(false);
      if (score > highScore) setHighScore(score);
    }
  }, [isPlaying, timeLeft, score, highScore]);

  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setIsPlaying(true);
    generateRound();
  };

  const handleColorClick = (color: string) => {
    if (!isPlaying) return;
    const correctColor = colors.find(c => c.name === targetColor)?.hex;
    if (color === correctColor) {
      setScore(score + 1);
      generateRound();
    } else {
      setScore(Math.max(0, score - 1));
    }
  };

  return (
    <Card className="w-full bg-card/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-center">Color Match Challenge</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-between text-lg font-semibold">
          <span>Score: {score}</span>
          <span>Time: {timeLeft}s</span>
          <span>Best: {highScore}</span>
        </div>

        {!isPlaying ? (
          <div className="text-center space-y-4 py-8">
            <p className="text-muted-foreground">
              Click the color that matches the name shown above!
            </p>
            <Button onClick={startGame} size="lg" variant="hero">
              Start Game
            </Button>
          </div>
        ) : (
          <>
            <div className="text-center py-8 bg-secondary/50 rounded-lg">
              <p className="text-sm text-muted-foreground mb-2">Match this color:</p>
              <h2 className="text-4xl font-bold text-accent">{targetColor}</h2>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {options.map((color, idx) => (
                <button
                  key={idx}
                  onClick={() => handleColorClick(color)}
                  className="h-24 md:h-32 rounded-lg transform-gpu transition-all duration-200 
                    hover:scale-105 active:scale-95 hover:shadow-xl touch-manipulation"
                  style={{ 
                    backgroundColor: color,
                    willChange: 'transform'
                  }}
                />
              ))}
            </div>
          </>
        )}
      </CardContent>
    </Card>
  );
};

export default ColorMatchGame;