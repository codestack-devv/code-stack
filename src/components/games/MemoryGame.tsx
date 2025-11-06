import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface CardType {
  id: number;
  emoji: string;
  isFlipped: boolean;
  isMatched: boolean;
}

const MemoryGame = () => {
  const [cards, setCards] = useState<CardType[]>([]);
  const [flippedCards, setFlippedCards] = useState<number[]>([]);
  const [moves, setMoves] = useState(0);
  const [matches, setMatches] = useState(0);
  const [isChecking, setIsChecking] = useState(false);
  const [gameWon, setGameWon] = useState(false);

  const emojis = ["🎮", "🎯", "🎲", "🎪", "🎨", "🎭", "🎸", "🎹"];

  const initializeGame = () => {
    const shuffled = [...emojis, ...emojis]
      .sort(() => Math.random() - 0.5)
      .map((emoji, idx) => ({
        id: idx,
        emoji,
        isFlipped: false,
        isMatched: false
      }));
    setCards(shuffled);
    setFlippedCards([]);
    setMoves(0);
    setMatches(0);
    setGameWon(false);
  };

  useEffect(() => {
    initializeGame();
  }, []);

  useEffect(() => {
    if (matches === emojis.length && matches > 0) {
      setGameWon(true);
    }
  }, [matches]);

  const handleCardClick = (id: number) => {
    if (isChecking || flippedCards.length >= 2 || cards[id].isMatched || cards[id].isFlipped) {
      return;
    }

    const newCards = [...cards];
    newCards[id].isFlipped = true;
    setCards(newCards);

    const newFlipped = [...flippedCards, id];
    setFlippedCards(newFlipped);

    if (newFlipped.length === 2) {
      setIsChecking(true);
      setMoves(moves + 1);

      const [first, second] = newFlipped;
      if (cards[first].emoji === cards[second].emoji) {
        setTimeout(() => {
          const updatedCards = [...newCards];
          updatedCards[first].isMatched = true;
          updatedCards[second].isMatched = true;
          setCards(updatedCards);
          setMatches(matches + 1);
          setFlippedCards([]);
          setIsChecking(false);
        }, 500);
      } else {
        setTimeout(() => {
          const updatedCards = [...newCards];
          updatedCards[first].isFlipped = false;
          updatedCards[second].isFlipped = false;
          setCards(updatedCards);
          setFlippedCards([]);
          setIsChecking(false);
        }, 1000);
      }
    }
  };

  return (
    <Card className="w-full bg-card/90 backdrop-blur-sm">
      <CardHeader>
        <CardTitle className="text-center">Memory Match</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="flex justify-around text-center">
          <div>
            <p className="text-muted-foreground text-sm">Moves</p>
            <p className="font-bold text-xl">{moves}</p>
          </div>
          <div>
            <p className="text-muted-foreground text-sm">Matches</p>
            <p className="font-bold text-xl text-accent">{matches}/{emojis.length}</p>
          </div>
        </div>

        {gameWon && (
          <div className="text-center py-4 bg-accent/20 rounded-lg animate-fade-in">
            <p className="text-xl font-bold text-accent">🎉 You Won!</p>
            <p className="text-sm text-muted-foreground">Completed in {moves} moves</p>
          </div>
        )}

        <div className="grid grid-cols-4 gap-3">
          {cards.map((card) => (
            <button
              key={card.id}
              onClick={() => handleCardClick(card.id)}
              className={`aspect-square rounded-lg text-2xl md:text-3xl font-bold 
                transform-gpu transition-all duration-300 hover:scale-105 active:scale-95 touch-manipulation
                ${card.isFlipped || card.isMatched 
                  ? "bg-accent/20 border-2 border-accent" 
                  : "bg-primary hover:bg-primary/90"}`}
              style={{ willChange: 'transform' }}
            >
              {card.isFlipped || card.isMatched ? card.emoji : "?"}
            </button>
          ))}
        </div>

        <Button onClick={initializeGame} className="w-full" variant="hero">
          New Game
        </Button>
      </CardContent>
    </Card>
  );
};

export default MemoryGame;