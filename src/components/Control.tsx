import { Button } from './Button';
import type { DifficultyModes } from '../types';

interface ControlProps {
  handleDifficultyMode: (mode: DifficultyModes) => () => void;
}

export function Control({ handleDifficultyMode }: ControlProps) {
  return (
    <>
      <div
        className='flex animate-fade flex-col items-center gap-4 rounded-lg border-4 
                   border-orange-400 p-6'
      >
        <h2
          className='rounded-xl bg-gradient-to-r from-orange-400 to-pink-400 
                     px-2 py-1 text-2xl font-bold text-white'
        >
          HOW TO PLAY
        </h2>
        <p className='text-lg font-medium'>
          Easy, just don&apos;t click on the same waifu twice!
        </p>
      </div>
      <div className='flex w-full animate-fade justify-center gap-6'>
        <Button label='easy' onClick={handleDifficultyMode('easy')} />
        <Button label='medium' onClick={handleDifficultyMode('medium')} />
        <Button label='hard' onClick={handleDifficultyMode('hard')} />
      </div>
    </>
  );
}
