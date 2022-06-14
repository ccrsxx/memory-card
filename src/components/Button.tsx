import type { IconType } from 'react-icons';

interface ButtonProps {
  label?: string;
  className?: string;
  onClick?: () => void;
}

export function Button({ label, className, onClick }: ButtonProps) {
  return (
    <button
      className={`${className} flex w-full max-w-[125px] items-center justify-center gap-4 rounded-lg
                  border-2 border-pink-400 bg-transparent py-2 px-3 text-sm font-bold uppercase
                  text-main-color transition-all duration-300 hover:scale-110 hover:bg-pink-400
                  hover:text-white hover:duration-300 focus:ring-offset-transparent focus-visible:outline-none
                  focus-visible:ring focus-visible:ring-accent-color active:scale-90 active:duration-150`}
      type='button'
      onClick={onClick}
    >
      {label}
    </button>
  );
}
