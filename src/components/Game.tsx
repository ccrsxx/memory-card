import type { ICurrentCards } from '../types';

interface GameProps {
  currentScore: number;
  maxScoreNumber: number;
  currentCards: ICurrentCards;
  handleCardClick: (name: string) => () => void;
}

export function Game({
  currentScore,
  maxScoreNumber,
  currentCards,
  handleCardClick
}: GameProps) {
  return (
    <>
      <p className='text-3xl font-bold'>
        {currentScore} / {maxScoreNumber}
      </p>
      <div
        key={currentScore}
        className='grid w-full animate-fade justify-center gap-8 [grid-template-columns:repeat(auto-fit,200px)]'
      >
        {currentCards!.map(({ name, image }, index) => (
          <button
            className='rounded-b-lg bg-dark-color transition-transform 
                             hover:scale-110 hover:duration-300 hover:ease-in-out'
            type='button'
            key={index}
            onClick={handleCardClick(name)}
          >
            <img className='rounded-t-lg' src={image} alt={name} />
            <h3 className='p-2 font-medium'>{name}</h3>
          </button>
        ))}
      </div>
    </>
  );
}
