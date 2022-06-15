import { getRandomCards } from './getRandomCards';
import type { ICard, IAllCards } from '../types';

export async function cacheImages(
  cards: ICard[],
  maxCards: number
): Promise<IAllCards> {
  const newCards = getRandomCards(cards, maxCards);

  const promises = newCards.map(
    (card) =>
      new Promise((resolve, reject) => {
        const img = new Image();
        img.src = card.image;
        img.onload = () => resolve(card);
        img.onerror = () => reject(new Error(`Failed to load ${card.image}`));
      })
  );

  const allCards = (await Promise.all(promises)) as ICard[];

  return allCards;
}
