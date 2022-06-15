import { Button } from './Button';

interface BackProps {
  resetGame: () => void;
}

export function Back({ resetGame }: BackProps) {
  return (
    <Button
      className='!max-w-max animate-fade-up'
      label='Back to menu'
      onClick={resetGame}
    />
  );
}
