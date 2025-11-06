import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import ColorMatchGame from "@/components/games/ColorMatchGame";
import ReactionGame from "@/components/games/ReactionGame";
import MemoryGame from "@/components/games/MemoryGame";
import SnakeGame from "@/components/games/SnakeGame";
import { Gamepad2 } from "lucide-react";

const Games = () => {
  const [selectedGame, setSelectedGame] = useState<string | null>(null);

  const games = [
    {
      id: "color-match",
      title: "Color Match",
      description: "Test your color perception! Match the colors as fast as you can.",
      component: ColorMatchGame,
      difficulty: "Easy"
    },
    {
      id: "reaction",
      title: "Reaction Speed",
      description: "How fast are your reflexes? Click when the color changes!",
      component: ReactionGame,
      difficulty: "Medium"
    },
    {
      id: "memory",
      title: "Memory Cards",
      description: "Classic memory game - find all matching pairs!",
      component: MemoryGame,
      difficulty: "Medium"
    },
    {
      id: "snake",
      title: "Snake Classic",
      description: "The legendary snake game! Eat, grow, and don't hit the walls!",
      component: SnakeGame,
      difficulty: "Hard"
    }
  ];

  if (selectedGame) {
    const game = games.find(g => g.id === selectedGame);
    if (game) {
      const GameComponent = game.component;
      return (
        <div className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-b from-background to-secondary/30">
          <div className="container mx-auto max-w-4xl">
            <Button 
              onClick={() => setSelectedGame(null)}
              variant="outline"
              className="mb-6"
            >
              ← Back to Games
            </Button>
            <GameComponent />
          </div>
        </div>
      );
    }
  }

  return (
    <div className="min-h-screen pt-24 pb-12 px-4 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="flex items-center justify-center mb-4">
            <Gamepad2 size={48} className="text-accent mr-4" />
            <h1 className="text-4xl md:text-5xl font-bold">
              Games Zone
            </h1>
          </div>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Take a break and challenge yourself! All games are optimized for smooth 60+ FPS performance.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {games.map((game, idx) => (
            <Card 
              key={game.id}
              className="bg-card/80 backdrop-blur-sm border-border hover:border-accent/50 
                transform-gpu transition-all duration-300 hover:scale-105 hover:shadow-xl
                cursor-pointer animate-fade-in"
              style={{ animationDelay: `${idx * 0.1}s` }}
              onClick={() => setSelectedGame(game.id)}
            >
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span>{game.title}</span>
                  <span className={`text-xs px-3 py-1 rounded-full ${
                    game.difficulty === "Easy" ? "bg-green-500/20 text-green-400" :
                    game.difficulty === "Medium" ? "bg-yellow-500/20 text-yellow-400" :
                    "bg-red-500/20 text-red-400"
                  }`}>
                    {game.difficulty}
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{game.description}</p>
                <Button variant="hero" className="w-full">
                  Play Now
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Games;