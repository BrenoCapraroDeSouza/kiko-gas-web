import { memo } from 'react';

import { CloseModalButtonProps } from '@/@types';

import { Icon } from '..';

function CloseModalButton(props: CloseModalButtonProps) {
  const { isLoading = false, onClose } = props;

  return (
    <button
      type='button'
      title='Fechar'
      className='absolute flex top-3 right-3 justify-center items-center size-8 bg-primary rounded-full cursor-pointer shadow-default disabled:bg-primary50 disabled:hover:opacity-100 disabled:shadow-none disabled:cursor-not-allowed hover:opacity-90 transition-colors duration-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-secondary focus-visible:border-secondary'
      disabled={isLoading}
      onClick={onClose}
    >
      <Icon
        variant='x'
        size='small'
        color={isLoading ? 'secondary70' : 'secondary'}
      />
    </button>
  );
}

export default memo(CloseModalButton);
