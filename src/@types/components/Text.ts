import { PropsWithChildren } from 'react';

import { Colors } from '../styles';

export interface TextProps extends PropsWithChildren {
  color?: Colors;
  className?: string;
}
