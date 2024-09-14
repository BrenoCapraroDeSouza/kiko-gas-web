import { Colors } from '@/@types';

export type IconVariant =
  | 'eye-slash'
  | 'eye'
  | 'pencil'
  | 'trash'
  | 'arrows-counter-clockwise';

export type IconSize = 'default';

export interface IconProps {
  variant: IconVariant;
  color?: Colors;
  size?: IconSize;
}
