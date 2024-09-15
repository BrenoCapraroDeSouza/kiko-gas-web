import { Colors } from '../styles';

export type SpinnerSize = 'small' | 'medium' | 'large';

export interface SpinnerProps {
  color?: Colors;
  size?: 'small' | 'medium' | 'large';
}
