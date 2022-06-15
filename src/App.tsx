import { useState, useEffect } from 'react';
import {
  Fetching,
  Control,
  Header,
  Footer,
  Main,
  Game,
  Complete
} from './components';
import { getRandomCards, cacheImages, sleep } from './common';
import { animeGirls } from './assets';
import type {
  IAllCards,
  ICurrentCards,
  MaxCardsNumber,
  MaxScoreNumber,
  DifficultyModes
} from './types';

export function App() {
  const [allCards, setAllCards] = useState<IAllCards>(null);
  const [currentCards, setCurrentCards] = useState<ICurrentCards>(null);
  const [currentScore, setCurrentScore] = useState<null | number>(null);
  const [maxScoreNumber, setMaxScoreNumber] = useState<MaxScoreNumber>(null);
  const [maxCardsNumber, setMaxCardsNumber] = useState<MaxCardsNumber>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);

  useEffect(() => {
    if (!maxScoreNumber) return;

    const fetchCards = async () => {
      let cards: IAllCards;

      setIsFetching(true);

      try {
        cards = await cacheImages(animeGirls, maxScoreNumber!);
      } catch (error) {
        // eslint-disable-next-line no-console
        console.log(error);
        setIsFetching(false);
        setIsError(true);
        return;
      }

      await sleep(1000);

      setAllCards(cards);
    };

    fetchCards();
  }, [maxScoreNumber]);

  useEffect(() => {
    if (isGameOver || !allCards) return;

    const cards = getRandomCards(
      allCards,
      maxCardsNumber!,
      true
    ) as ICurrentCards;

    setCurrentCards(cards);
    setIsFetching(false);
  }, [allCards]);

  const changeDifficultyMode = (mode: DifficultyModes) => () => {
    const [maxCards, maxScore]: [MaxCardsNumber, MaxScoreNumber] =
      mode === 'easy' ? [3, 10] : mode === 'medium' ? [4, 20] : [5, 30];

    setCurrentScore(1);
    setMaxScoreNumber(maxScore);
    setMaxCardsNumber(maxCards);
  };

  const handleCardClick = (name: string) => () => {
    const cardIndex = allCards!.findIndex((card) => card.name === name);
    const { isClicked } = allCards![cardIndex];

    if (isClicked) {
      setIsGameOver(true);
      return;
    }

    setCurrentScore((prevCurrentScore) => prevCurrentScore! + 1);
    setAllCards((prevAllCards) => {
      const newCards = [...prevAllCards!];
      newCards[cardIndex].isClicked = true;
      return newCards;
    });

    if (currentScore === maxScoreNumber!) {
      setIsGameOver(true);
      setIsWin(true);
    }
  };

  const resetGame = () => {
    setAllCards(null);
    setCurrentCards(null);
    setCurrentScore(null);
    setMaxScoreNumber(null);
    setMaxCardsNumber(null);
    setIsFetching(false);
    setIsError(false);
    setIsGameOver(false);
    setIsWin(false);
  };

  return (
    <div className='mx-4 flex min-h-screen flex-col items-center justify-center gap-8 py-10'>
      <Header
        className={`${
          currentScore && '!top-10 !text-4xl lg:!top-24 lg:!text-5xl'
        }`}
      />
      <Main>
        {isError ? (
          <Complete error resetGame={resetGame} />
        ) : isWin ? (
          <Complete won resetGame={resetGame} />
        ) : isGameOver && !isWin ? (
          <Complete lost resetGame={resetGame} />
        ) : currentCards ? (
          <Game
            currentScore={currentScore!}
            maxScoreNumber={maxScoreNumber!}
            currentCards={currentCards}
            resetGame={resetGame}
            handleCardClick={handleCardClick}
          />
        ) : isFetching ? (
          <Fetching />
        ) : (
          <Control changeDifficultyMode={changeDifficultyMode} />
        )}
      </Main>
      <Footer />
    </div>
  );
}
