import { Button } from './Button';
import type { DifficultyModes } from '../types';

interface ControlProps {
  changeDifficultyMode: (mode: DifficultyModes) => () => void;
}

export function Control({ changeDifficultyMode }: ControlProps) {
  return (
    <>
      <div className='flex flex-col items-center gap-4 rounded-lg border-4 border-orange-400 p-6'>
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
      <div className='flex w-full justify-center gap-6'>
        <Button label='easy' onClick={changeDifficultyMode('easy')} />
        <Button label='medium' onClick={changeDifficultyMode('medium')} />
        <Button label='hard' onClick={changeDifficultyMode('hard')} />
      </div>
    </>
  );
}
