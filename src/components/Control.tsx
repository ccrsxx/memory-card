import { Button } from './Button';
import type { DifficultyModes } from '../types';

interface ControlProps {
  changeDifficultyMode: (mode: DifficultyModes) => () => void;
}

export function Control({ changeDifficultyMode }: ControlProps) {
  return (
    <div className='flex w-full justify-center gap-4'>
      <Button label='easy' onClick={changeDifficultyMode('easy')} />
      <Button label='medium' onClick={changeDifficultyMode('medium')} />
      <Button label='hard' onClick={changeDifficultyMode('hard')} />
    </div>
  );
}
