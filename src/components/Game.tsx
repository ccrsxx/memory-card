import { Back } from './Back';
import { Card } from './Card';
import type { ICurrentCards } from '../types';

interface GameProps {
  maxScoreNumber: number;
  currentScore: number;
  currentCards: ICurrentCards;
  resetGame: () => void;
  handleCardClick: (name: string) => () => void;
}

export function Game({
  maxScoreNumber,
  currentScore,
  currentCards,
  resetGame,
  handleCardClick
}: GameProps) {
  return (
    <>
      <p className='animate-fade-up-fast text-3xl font-bold'>
        {currentScore} / {maxScoreNumber}
      </p>
      <div
        key={currentScore}
        className={`${
          currentScore === 1 ? 'animate-fade-up' : 'animate-fade-fast'
        } grid w-full justify-center gap-6 [grid-template-columns:repeat(auto-fit,150px)] sm:gap-8
          sm:[grid-template-columns:repeat(auto-fit,200px)]`}
      >
        {currentCards!.map(({ name, image }, index) => (
          <Card
            name={name}
            image={image}
            key={index}
            handleCardClick={handleCardClick(name)}
          />
        ))}
      </div>
      <Back resetGame={resetGame} />
    </>
  );
}
