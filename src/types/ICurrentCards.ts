import type { ICard } from './ICard';

export type ICurrentCards =
  | [ICard, ICard, ICard]
  | [ICard, ICard, ICard, ICard]
  | [ICard, ICard, ICard, ICard, ICard];
