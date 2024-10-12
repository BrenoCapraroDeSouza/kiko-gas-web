export type ChipVariant =
  | 'accepted'
  | 'refused'
  | 'replenishment'
  | 'request'
  | 'collection';

export interface ChipProps {
  variant: ChipVariant;
}
