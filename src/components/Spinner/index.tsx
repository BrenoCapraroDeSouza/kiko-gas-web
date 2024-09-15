import { memo } from 'react';

import { Colors, SpinnerProps } from '@/@types';

function Spinner(props: SpinnerProps) {
  const { color = 'secondary', size = 'large' } = props;

  const spinnerColors: Record<Colors, string> = {
    primary: 'text-primary',
    primary50: 'text-primary50',
    secondary: 'text-secondary',
    secondary70: 'text-secondary70',
    background: 'text-background',
    content: 'text-content',
    overlay40: 'text-overlay40',
  };

  const spinnerSizes: Record<string, string> = {
    small: 'size-4',
    medium: 'size-5',
    large: 'size-6',
  };

  return (
    <svg
      className={`${spinnerSizes[size]} ${spinnerColors[color]} animate-spin`}
      viewBox='0 0 100 100'
    >
      <circle
        fill='none'
        strokeWidth='10'
        className='stroke-current opacity-40'
        cx='50'
        cy='50'
        r='40'
      />

      <circle
        fill='none'
        strokeWidth='10'
        className='stroke-current'
        strokeDasharray='250'
        strokeDashoffset='210'
        cx='50'
        cy='50'
        r='40'
      />
    </svg>
  );
}

export default memo(Spinner);
