export type SignalStatusVariant = 'collection' | 'replenishment' | 'request';

export interface SignalStatusProps {
  variant: SignalStatusVariant;
}
