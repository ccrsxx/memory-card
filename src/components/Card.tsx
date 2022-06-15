import { Button } from './Button';

interface CardProps {
  name: string;
  image: string;
  handleCardClick: () => void;
}

export function Card({ name, image, handleCardClick }: CardProps) {
  return (
    <Button
      className='group max-w-none flex-col gap-0 border-0 bg-dark-color !p-0'
      onClick={handleCardClick}
    >
      <img
        className='rounded-t-lg transition-all duration-300 group-hover:brightness-110 
                   group-focus-visible:brightness-110'
        src={image}
        alt={name}
      />
      <h3 className='p-2 font-medium'>{name}</h3>
    </Button>
  );
}
