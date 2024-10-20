import { Colors } from '@/@types';

export type IconVariant =
  | 'eye-slash'
  | 'eye'
  | 'pencil'
  | 'trash'
  | 'arrows-counter-clockwise'
  | 'sign-out'
  | 'tray'
  | 'at'
  | 'user'
  | 'phone'
  | 'info'
  | 'user-plus'
  | 'x'
  | 'cylinder'
  | 'plus'
  | 'backspace'
  | 'hand'
  | 'map-pin-simple'
  | 'money'
  | 'pix-logo'
  | 'calendar-dots'
  | 'calendar-check'
  | 'calendar-x';

export type IconSize = 'default' | 'small' | 'large' | 'giant';

export interface IconProps {
  variant: IconVariant;
  color?: Colors;
  size?: IconSize;
}
