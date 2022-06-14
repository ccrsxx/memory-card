interface MainProps {
  className: string;
  children: React.ReactNode;
}

export function Main({ className, children }: MainProps) {
  return (
    <main
      className={`${className} flex w-full max-w-7xl flex-1 flex-col
                 items-center justify-center gap-8 rounded-lg p-8`}
    >
      {children}
    </main>
  );
}
