export type SignalStatusVariant = 'COLLECTION' | 'REPLENISHMENT' | 'REQUEST';

export interface SignalStatusProps {
  variant: SignalStatusVariant;
}
