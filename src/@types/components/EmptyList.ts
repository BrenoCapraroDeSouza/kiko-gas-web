export type EmptyListVariant =
  | 'clients'
  | 'cylinders'
  | 'historic'
  | 'requests';

export interface EmptyListProps {
  variant: EmptyListVariant;
}
