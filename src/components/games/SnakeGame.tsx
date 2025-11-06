import { useState, useEffect, useRef, useCallback } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Position {
  x: number;
  y: number;
}

const GRID_SIZE = 20;
const CELL_SIZE = 15;
const INITIAL_SPEED = 150;

const SnakeGame = () => {
  const [snake, setSnake] = useState<Position[]>([{ x: 10, y: 10 }]);
  const [food, setFood] = useState<Position>({ x: 15, y: 15 });
  const [direction, setDirection] = useState<Position>({ x: 1, y: 0 });
  const [isPlaying, setIsPlaying] = useState(false);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [speed, setSpeed] = useState(INITIAL_SPEED);
  const directionRef = useRef(direction);
  const gameLoopRef = useRef<number>();

  const generateFood = useCallback((currentSnake: Position[]) => {
    let newFood: Position;
    do {
      newFood = {
        x: Math.floor(Math.random() * GRID_SIZE),
        y: Math.floor(Math.random() * GRID_SIZE)
      };
    } while (currentSnake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }, []);

  const resetGame = () => {
    const initialSnake = [{ x: 10, y: 10 }];
    setSnake(initialSnake);
    setFood(generateFood(initialSnake));
    setDirection({ x: 1, y: 0 });
    directionRef.current = { x: 1, y: 0 };
    setScore(0);
    setSpeed(INITIAL_SPEED);
    setIsPlaying(true);
  };

  const gameOver = useCallback(() => {
    setIsPlaying(false);
    if (score > highScore) {
      setHighScore(score);
    }
    if (gameLoopRef.current) {
      cancelAnimationFrame(gameLoopRef.current);
    }
  }, [score, highScore]);

  const moveSnake = useCallback(() => {
    setSnake(prevSnake => {
      const newHead = {
        x: prevSnake[0].x + directionRef.current.x,
        y: prevSnake[0].y + directionRef.current.y
      };

      // Check wall collision
      if (newHead.x < 0 || newHead.x >= GRID_SIZE || newHead.y < 0 || newHead.y >= GRID_SIZE) {
        gameOver();
        return prevSnake;
      }

      // Check self collision
      if (prevSnake.some(segment => segment.x === newHead.x && segment.y === newHead.y)) {
        gameOver();
        return prevSnake;
      }

      const newSnake = [newHead, ...prevSnake];

      // Check food collision
      if (newHead.x === food.x && newHead.y === food.y) {
        setScore(s => s + 10);
        setFood(generateFood(newSnake));
        setSpeed(s => Math.max(50, s - 5));
      } else {
        newSnake.pop();
      }

      return newSnake;
    });
  }, [food, gameOver, generateFood]);

  useEffect(() => {
    directionRef.current = direction;
  }, [direction]);

  useEffect(() => {
    if (!isPlaying) return;

    let lastTime = 0;
    const gameLoop = (currentTime: number) => {
      if (currentTime - lastTime >= speed) {
        moveSnake();
        lastTime = currentTime;
      }
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };

    gameLoopRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (gameLoopRef.current) {
        cancelAnimationFrame(gameLoopRef.current);
      }
    };
  }, [isPlaying, speed, moveSnake]);

  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (!isPlaying) return;

      const key = e.key.toLowerCase();
      const currentDir = directionRef.current;

      if ((key === "arrowup" || key === "w") && currentDir.y === 0) {
        setDirection({ x: 0, y: -1 });
      } else if ((key === "arrowdown" || key === "s") && currentDir.y === 0) {
        setDirection({ x: 0, y: 1 });
      } else if ((key === "arrowleft" || key === "a") && currentDir.x === 0) {
        setDirection({ x: -1, y: 0 });
      } else if ((key === "arrowright" || key === "d") && currentDir.x === 0) {
        setDirection({ x: 1, y: 0 });
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isPlaying]);

  // Touch controls
  const touchStartRef = useRef<{ x: number; y: number } | null>(null);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (!isPlaying) return;
    const touch = e.touches[0];
    touchStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!isPlaying || !touchStartRef.current) return;
    
    const touch = e.changedTouches[0];
    const deltaX = touch.clientX - touchStartRef.current.x;
    const deltaY = touch.clientY - touchStartRef.current.y;
    const currentDir = directionRef.current;

    // Determine swipe direction based on larger delta
    if (Math.abs(deltaX) > Math.abs(deltaY)) {
      // Horizontal swipe
      if (deltaX > 30 && currentDir.x === 0) {
        setDirection({ x: 1, y: 0 }); // Right
      } else if (deltaX < -30 && currentDir.x === 0) {
        setDirection({ x: -1, y: 0 }); // Left
      }
    } else {
      // Vertical swipe
      if (deltaY > 30 && currentDir.y === 0) {
        setDirection({ x: 0, y: 1 }); // Down
      } else if (deltaY < -30 && currentDir.y === 0) {
        setDirection({ x: 0, y: -1 }); // Up
      }
    }

    touchStartRef.current = null;
  };

  return (
    <Card className="w-full bg-card/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-center">Snake Classic</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-around text-center">
          <div>
            <p className="text-muted-foreground text-sm">Score</p>
            <p className="font-bold text-xl text-accent">{score}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">High Score</p>
            <p className="font-bold text-xl">{highScore}</p>
          </div>
        </div>

        <div className="flex justify-center touch-none">
          <div
            className="bg-secondary/50 rounded-lg border-2 border-border"
            style={{
              width: GRID_SIZE * CELL_SIZE,
              height: GRID_SIZE * CELL_SIZE,
              position: "relative"
            }}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            {/* Snake */}
            {snake.map((segment, idx) => (
              <div
                key={idx}
                className={`absolute transition-all duration-75 ${
                  idx === 0 ? "bg-accent" : "bg-primary"
                }`}
                style={{
                  width: CELL_SIZE - 2,
                  height: CELL_SIZE - 2,
                  left: segment.x * CELL_SIZE,
                  top: segment.y * CELL_SIZE,
                  borderRadius: idx === 0 ? "50%" : "20%",
                  willChange: 'transform'
                }}
              />
            ))}
            {/* Food */}
            <div
              className="absolute bg-red-500 animate-pulse"
              style={{
                width: CELL_SIZE - 2,
                height: CELL_SIZE - 2,
                left: food.x * CELL_SIZE,
                top: food.y * CELL_SIZE,
                borderRadius: "50%"
              }}
            />
          </div>
        </div>

        {!isPlaying && (
          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              Desktop: Use Arrow Keys or WASD<br />Mobile: Swipe to move
            </p>
            <Button onClick={resetGame} className="w-full" variant="hero">
              {score > 0 ? "Play Again" : "Start Game"}
            </Button>
          </div>
        )}

        {isPlaying && (
          <div className="grid grid-cols-3 gap-2 max-w-[200px] mx-auto md:hidden">
            <div />
            <Button
              size="sm"
              variant="outline"
              onClick={() => direction.y === 0 && setDirection({ x: 0, y: -1 })}
              className="h-14 text-2xl"
            >
              ↑
            </Button>
            <div />
            <Button
              size="sm"
              variant="outline"
              onClick={() => direction.x === 0 && setDirection({ x: -1, y: 0 })}
              className="h-14 text-2xl"
            >
              ←
            </Button>
            <Button
              size="sm"
              variant="outline"
              onClick={() => direction.x === 0 && setDirection({ x: 1, y: 0 })}
              className="h-14 text-2xl"
            >
              →
            </Button>
            <div />
            <div />
            <Button
              size="sm"
              variant="outline"
              onClick={() => direction.y === 0 && setDirection({ x: 0, y: 1 })}
              className="h-14 text-2xl"
            >
              ↓
            </Button>
            <div />
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default SnakeGame;