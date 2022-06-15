import type { IAllCards } from '../types';

export function getRandomCards(
  array: IAllCards,
  maxCards: number,
  extraCheck = false
) {
  const newArray = !extraCheck ? JSON.parse(JSON.stringify(array)) : array;
  const cards: IAllCards = [];

  while (cards.length < maxCards) {
    const randomIndex = Math.floor(Math.random() * array!.length);
    const randomCard = newArray![randomIndex];

    const isAllClicked = extraCheck
      ? cards.length === maxCards! - 1
        ? [...cards, randomCard].every(({ isClicked }) => isClicked)
        : false
      : false;

    if (!cards.includes(randomCard) && !isAllClicked) cards.push(randomCard);
  }

  return cards;
}
