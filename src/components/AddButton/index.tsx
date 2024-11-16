import { memo } from 'react';

import { AddButtonProps } from '@/@types';

import { Icon } from '..';

function AddButton(props: AddButtonProps) {
  const { variant = 'user-plus', title, onClick } = props;

  return (
    <button
      type='button'
      title={title}
      onClick={onClick}
      className='z-40 fixed bottom-10 right-10 flex justify-center items-center size-16 bg-primary shadow-default rounded-full hover:opacity-90 transition-colors duration-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-secondary'
    >
      <Icon variant={variant} size='large' />
    </button>
  );
}

export default memo(AddButton);
