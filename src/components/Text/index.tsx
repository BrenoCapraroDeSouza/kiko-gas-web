import { memo } from 'react';

import { Colors, TextProps, TextSize, TextWeight } from '@/@types';

function Text(props: TextProps) {
  const {
    children,
    className = '',
    color = 'secondary',
    size = 'body',
    weight = 'regular',
  } = props;

  const textColors: Record<Colors, string> = {
    primary: 'text-primary',
    primary50: 'text-primary50',
    secondary: 'text-secondary',
    secondary70: 'text-secondary70',
    background: 'text-background',
    content: 'text-content',
    overlay40: 'text-overlay40',
  };

  const textSizes: Record<TextSize, string> = {
    body: 'text-base',
    alternative: 'text-xl',
    title: 'text-2xl',
  };

  const textWeights: Record<TextWeight, string> = {
    regular: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
  };

  return (
    <p
      className={`font-poppins ${textWeights[weight]} ${textSizes[size]} ${textColors[color]} ${className}`}
    >
      {children}
    </p>
  );
}

export default memo(Text);
