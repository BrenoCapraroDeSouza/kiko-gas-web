import { PropsWithChildren } from 'react';

import { Colors } from '../styles';

export type TextWeight = 'regular' | 'medium' | 'semibold';

export type TextSize = 'body' | 'alternative' | 'title' | 'small';

export interface TextProps extends PropsWithChildren {
  color?: Colors;
  size?: TextSize;
  weight?: TextWeight;
  className?: string;
}
