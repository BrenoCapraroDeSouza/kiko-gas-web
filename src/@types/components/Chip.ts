export type ChipVariant =
  | 'ACCEPTED'
  | 'REFUSED'
  | 'REPLENISHMENT'
  | 'REQUEST'
  | 'COLLECTION';

export interface ChipProps {
  variant: ChipVariant;
}
