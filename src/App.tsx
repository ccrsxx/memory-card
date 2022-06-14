import { useState, useEffect } from 'react';
import {
  Fetching,
  Control,
  Header,
  Footer,
  Winner,
  Loser,
  Main,
  Game
} from './components';
import { animeGirls } from './assets';
import { cacheImages, sleep } from './common';
import type {
  ICard,
  IAllCards,
  ICurrentCards,
  MaxCardsNumber,
  MaxScoreNumber,
  DifficultyModes
} from './types';

export function App() {
  const [allCards, setAllCards] = useState<IAllCards>(null);
  const [currentScore, setCurrentScore] = useState<null | number>(null);
  const [maxScoreNumber, setMaxScoreNumber] = useState<MaxScoreNumber>(null);
  const [currentCards, setCurrentCards] = useState<ICurrentCards>(null);
  const [maxCardsNumber, setMaxCardsNumber] = useState<MaxCardsNumber>(null);
  const [isFetching, setIsFetching] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [isWin, setIsWin] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (allCards === null) return;

    const cards: ICard[] = [];

    while (cards.length < maxCardsNumber!) {
      const randomIndex = Math.floor(Math.random() * allCards.length);
      const randomCard = allCards[randomIndex];

      const isAllClicked =
        cards.length === maxCardsNumber! - 1
          ? [...cards, randomCard].every(({ isClicked }) => isClicked)
          : false;

      if (!cards.includes(randomCard) && !isAllClicked) cards.push(randomCard);
    }

    setCurrentCards(cards as ICurrentCards);
    setIsFetching(false);
  }, [allCards, isFetching]);

  const fetchCards = async () => {
    let cards: IAllCards;

    setIsFetching(true);

    try {
      cards = await cacheImages(animeGirls);
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

  const setGame = (mode: DifficultyModes) => {
    const [maxCards, maxScore]: [MaxCardsNumber, MaxScoreNumber] =
      mode === 'easy' ? [3, 10] : mode === 'medium' ? [4, 20] : [5, 30];

    setMaxCardsNumber(maxCards);

    setCurrentScore(1);
    setMaxScoreNumber(maxScore);
  };

  const changeDifficultyMode = (mode: DifficultyModes) => () => {
    setGame(mode);
    fetchCards();
  };

  const handleCardClick = (name: string) => () => {
    const cardIndex = allCards!.findIndex((card) => card.name === name);
    const { isClicked } = allCards![cardIndex];

    if (isClicked) {
      setIsGameOver(true);
      return;
    }

    setCurrentScore((prevCurrentScore) => prevCurrentScore! + 1);
    setAllCards((prevAllXCards) => {
      const newCards = [...prevAllXCards!];
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
    setCurrentScore(null);
    setMaxScoreNumber(null);
    setCurrentCards(null);
    setMaxCardsNumber(null);
    setIsGameOver(false);
    setIsWin(false);
    setIsError(false);
  };

  return (
    <div className='mx-4 flex min-h-screen flex-col items-center justify-center gap-8 py-10'>
      <Header
        className={`${currentScore && '!top-24 text-5xl'}`}
        resetGame={resetGame}
      />
      <Main className={`${1}`}>
        {isWin ? (
          <Winner />
        ) : isGameOver && !isWin ? (
          <Loser />
        ) : currentCards ? (
          <Game
            currentScore={currentScore!}
            maxScoreNumber={maxScoreNumber!}
            currentCards={currentCards}
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
