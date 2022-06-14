interface HeaderProps {
  className: string;
  resetGame: () => void;
}

export function Header({ className, resetGame }: HeaderProps) {
  return (
    <header
      className={`${className} relative top-36 animate-fade-up text-6xl 
                  transition-all duration-1000 ease-in-out`}
    >
      <h1
        className='bg-gradient-to-r from-orange-400 to-pink-400
                   bg-clip-text font-bold text-transparent'
      >
        <button type='button' onClick={resetGame}>
          WAIFU MEMORY CARD
        </button>
      </h1>
    </header>
  );
}
