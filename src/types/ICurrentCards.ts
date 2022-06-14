import type { ICard } from './ICard';

export type ICurrentCards =
  | null
  | [ICard, ICard, ICard]
  | [ICard, ICard, ICard, ICard]
  | [ICard, ICard, ICard, ICard, ICard];
