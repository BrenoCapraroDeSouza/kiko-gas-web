import { memo } from 'react';

import {
  Colors,
  IconVariant,
  IntuitiveButtonProps,
  IntuitiveButtonVariant,
} from '@/@types';

import Icon from '../Icon';

function IntuitiveButton(props: IntuitiveButtonProps) {
  const { variant, title, isDisabled = false, onClick } = props;

  const intuitiveIcons: Record<IntuitiveButtonVariant, IconVariant> = {
    info: 'info',
    delete: 'trash',
    edit: 'pencil',
  };

  const intuitiveIconColors: Record<IntuitiveButtonVariant, Colors> = {
    info: isDisabled ? 'secondary70' : 'secondary',
    delete: isDisabled ? 'primary50' : 'primary',
    edit: isDisabled ? 'secondary70' : 'secondary',
  };

  const isDelete = variant === 'delete';
  const borderColor = isDelete
    ? 'border-primary disabled:border-primary50'
    : 'border-secondary disabled:border-secondary70';

  return (
    <button
      type='button'
      title={title}
      disabled={isDisabled}
      onClick={onClick}
      className={`flex size-10 justify-center items-center bg-content rounded cursor-pointer border ${borderColor} disabled:cursor-not-allowed disabled:hover:opacity-100 hover:opacity-90 transition-colors duration-300`}
    >
      <Icon
        variant={intuitiveIcons[variant]}
        color={intuitiveIconColors[variant]}
      />
    </button>
  );
}

export default memo(IntuitiveButton);
