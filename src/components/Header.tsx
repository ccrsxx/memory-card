interface HeaderProps {
  className: string;
}

export function Header({ className }: HeaderProps) {
  return (
    <header
      className={`${className} relative top-28 animate-fade-up text-5xl transition-all duration-1000 
                  ease-in-out sm:top-36 sm:text-6xl`}
    >
      <h1
        className='flex flex-col gap-2 bg-gradient-to-r from-orange-400
                   to-pink-400 bg-clip-text font-bold text-transparent sm:block'
      >
        <span>WAIFU</span> MEMORY CARD
      </h1>
    </header>
  );
}
