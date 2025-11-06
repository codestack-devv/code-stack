import { useState, useEffect, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const ReactionGame = () => {
  const [gameState, setGameState] = useState<"waiting" | "ready" | "go" | "result">("waiting");
  const [reactionTime, setReactionTime] = useState<number | null>(null);
  const [bestTime, setBestTime] = useState<number | null>(null);
  const [attempts, setAttempts] = useState<number[]>([]);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    if (gameState === "ready") {
      const delay = 2000 + Math.random() * 3000;
      const timer = setTimeout(() => {
        setGameState("go");
        startTimeRef.current = Date.now();
      }, delay);
      return () => clearTimeout(timer);
    }
  }, [gameState]);

  const startGame = () => {
    setGameState("ready");
    setReactionTime(null);
  };

  const handleClick = () => {
    if (gameState === "ready") {
      setGameState("result");
      setReactionTime(null);
    } else if (gameState === "go") {
      const time = Date.now() - startTimeRef.current;
      setReactionTime(time);
      setAttempts([...attempts, time]);
      if (bestTime === null || time < bestTime) {
        setBestTime(time);
      }
      setGameState("result");
    }
  };

  const getAverageTime = () => {
    if (attempts.length === 0) return 0;
    return Math.round(attempts.reduce((a, b) => a + b, 0) / attempts.length);
  };

  return (
    <Card className="w-full bg-card/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-center">Reaction Speed Test</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-around text-sm">
          <div className="text-center">
            <p className="text-muted-foreground">Best</p>
            <p className="font-bold text-lg text-accent">{bestTime ? `${bestTime}ms` : "-"}</p>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground">Average</p>
            <p className="font-bold text-lg">{attempts.length > 0 ? `${getAverageTime()}ms` : "-"}</p>
          </div>
          <div className="text-center">
            <p className="text-muted-foreground">Attempts</p>
            <p className="font-bold text-lg">{attempts.length}</p>
          </div>
        </div>

        <div
          onClick={handleClick}
          className={`h-64 md:h-80 rounded-lg flex items-center justify-center text-center cursor-pointer
            transition-all duration-300 transform-gpu hover:scale-[1.02] active:scale-[0.98] touch-manipulation
            ${gameState === "ready" ? "bg-red-600 hover:bg-red-700" : ""}
            ${gameState === "go" ? "bg-green-500 hover:bg-green-600" : ""}
            ${(gameState === "waiting" || gameState === "result") ? "bg-primary hover:bg-primary/90" : ""}`}
          style={{ willChange: 'transform, background-color' }}
        >
          {gameState === "waiting" && (
            <div className="space-y-4">
              <p className="text-xl font-semibold">Click to Start</p>
              <p className="text-sm text-muted-foreground">Click when the screen turns GREEN</p>
            </div>
          )}
          {gameState === "ready" && (
            <p className="text-xl font-semibold">Wait for GREEN...</p>
          )}
          {gameState === "go" && (
            <p className="text-2xl font-bold">CLICK NOW!</p>
          )}
          {gameState === "result" && (
            <div className="space-y-4">
              {reactionTime !== null ? (
                <>
                  <p className="text-3xl font-bold text-accent">{reactionTime}ms</p>
                  <p className="text-sm text-muted-foreground">
                    {reactionTime < 200 ? "Lightning fast! ⚡" :
                     reactionTime < 300 ? "Excellent! 🎯" :
                     reactionTime < 400 ? "Good! 👍" : "Keep practicing! 💪"}
                  </p>
                </>
              ) : (
                <p className="text-xl text-red-400">Too early! Wait for GREEN</p>
              )}
            </div>
          )}
        </div>

        {gameState === "result" && (
          <Button onClick={startGame} className="w-full" variant="hero">
            Try Again
          </Button>
        )}
      </CardContent>
    </Card>
  );
};

export default ReactionGame;