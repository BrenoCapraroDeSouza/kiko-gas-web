import { Colors } from '@/@types';

export type IconVariant =
  | 'eye-slash'
  | 'eye'
  | 'pencil'
  | 'trash'
  | 'arrows-counter-clockwise'
  | 'sing-out'
  | 'tray'
  | 'at'
  | 'user'
  | 'phone'
  | 'info'
  | 'user-plus'
  | 'x';

export type IconSize = 'default' | 'small' | 'large' | 'giant';

export interface IconProps {
  variant: IconVariant;
  color?: Colors;
  size?: IconSize;
}
