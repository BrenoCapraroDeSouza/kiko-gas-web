import { memo } from 'react';

import { ButtonProps } from '@/@types';

import { Spinner, Text } from '..';

function Button(props: ButtonProps) {
  const {
    title,
    isDisabled = false,
    isHugWidth = false,
    isLoading = false,
    type = 'button',
    onClick,
  } = props;

  const width = isHugWidth ? 'w-full' : 'w-auto';
  const cursor = isDisabled ? 'cursor-not-allowed' : 'cursor-pointer';
  const backgroundColor = isDisabled ? 'bg-primary50' : 'bg-primary';
  const textColor = isDisabled ? 'secondary70' : 'secondary';

  return (
    <button
      className={`flex ${width} h-15 justify-center items-center px-4 ${backgroundColor} rounded ${cursor} shadow-default disabled:shadow-none hover:opacity-90 transition-colors duration-300 disabled:hover:opacity-100 focus-visible:outline-none focus-visible:ring focus-visible:ring-secondary`}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <Text color={textColor} size='alternative' weight='semibold'>
          {title}
        </Text>
      )}
    </button>
  );
}

export default memo(Button);
