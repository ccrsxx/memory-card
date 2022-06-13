interface MainProps {
  children: React.ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <main
      className='flex w-full max-w-xl flex-col items-center 
                 gap-4 rounded-lg bg-main-color p-8'
    >
      {children}
    </main>
  );
}
