interface MainProps {
  children: React.ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <main
      className='flex w-full max-w-xl flex-1 flex-col items-center
                 justify-center gap-8 rounded-lg p-8'
    >
      {children}
    </main>
  );
}
