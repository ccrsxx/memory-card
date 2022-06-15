interface MainProps {
  children: React.ReactNode;
}

export function Main({ children }: MainProps) {
  return (
    <main
      className='flex w-full max-w-7xl flex-1 flex-col items-center
                 justify-center gap-8 rounded-lg p-2 py-6 sm:p-8'
    >
      {children}
    </main>
  );
}
