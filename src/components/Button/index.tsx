import { memo } from 'react';

import { ButtonProps, ButtonVariant } from '@/@types';

import { Spinner, Text } from '..';

function Button(props: ButtonProps) {
  const {
    title,
    isDisabled = false,
    isHugWidth = false,
    isLoading = false,
    variant = 'primary',
    type = 'button',
    onClick,
  } = props;

  const isDisabledOrLoading = isDisabled || isLoading;
  const isPrimary = variant === 'primary';
  const width = isHugWidth ? 'w-full' : 'w-auto';
  const cursor = isDisabledOrLoading ? 'cursor-not-allowed' : 'cursor-pointer';
  const textColor = isDisabled ? 'secondary70' : 'secondary';
  const shadow = isPrimary ? 'shadow-default' : '';
  const border = !isPrimary
    ? 'border border-secondary disabled:border-secondary70'
    : '';

  const backgroundColors: Record<ButtonVariant, string> = {
    primary: isDisabled ? 'bg-primary50' : 'bg-primary',
    secondary: 'bg-content',
  };

  return (
    <button
      className={`flex ${width} h-15 justify-center items-center px-4 ${backgroundColors[variant]} ${border} rounded ${cursor} ${shadow} disabled:shadow-none hover:opacity-90 transition-colors duration-300 disabled:hover:opacity-100 focus-visible:outline-none focus-visible:ring focus-visible:ring-secondary`}
      type={type}
      disabled={isDisabledOrLoading}
      onClick={onClick}
    >
      {isLoading ? (
        <Spinner color={textColor} />
      ) : (
        <Text color={textColor} size='alternative' weight='semibold'>
          {title}
        </Text>
      )}
    </button>
  );
}

export default memo(Button);
