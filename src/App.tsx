import { useState, useEffect } from 'react';
import { Header, Main, About, Footer, Control } from './components';
import type { DifficultyModes } from './types';

export function App() {
  const [allCards, setAllCards] = useState<string[]>([]);
  const [currentCards, setCurrentCards] = useState([]);
  const [difficultyMode, setDifficultyMode] = useState<DifficultyModes>('easy');
  const [isFetching, setIsFetching] = useState(false);

  const changeDifficultyMode = (mode: DifficultyModes) => () => {
    if (mode === difficultyMode) return;
    setDifficultyMode(mode);
  };

  return (
    <div className='mx-4 flex min-h-screen flex-col items-center justify-center gap-10'>
      <Header />
      <Main>
        <About />
        <Control changeDifficultyMode={changeDifficultyMode} />
      </Main>
      <Footer />
    </div>
  );
}
