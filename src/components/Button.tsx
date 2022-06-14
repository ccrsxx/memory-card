import type { IconType } from 'react-icons';

interface ButtonProps {
  label: string;
  Icon?: IconType;
  className?: string;
  onClick?: () => void;
}

export function Button({ label, Icon, className, onClick }: ButtonProps) {
  return (
    <button
      className={`${className} flex w-full max-w-[100px] items-center justify-center gap-4 rounded-xl bg-btn-color py-2 px-3 
                  text-sm font-medium uppercase text-main-color transition-all duration-300 hover:text-accent-color
                  hover:brightness-125 hover:duration-300 focus:ring-offset-transparent focus-visible:outline-none 
                  focus-visible:ring focus-visible:ring-accent-color active:scale-90 active:duration-150`}
      type='button'
      onClick={onClick}
    >
      {Icon && <Icon className='mr-2 h-4 w-4' />}
      {label}
    </button>
  );
}
