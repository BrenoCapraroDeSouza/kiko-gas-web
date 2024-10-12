import { memo } from 'react';

import {
  Colors,
  IconVariant,
  SignalStatusProps,
  SignalStatusVariant,
} from '@/@types';

import { Icon, Text } from '..';

function SignalStatus(props: SignalStatusProps) {
  const { variant } = props;

  const isCollection = variant === 'collection';
  const borderColor = isCollection ? 'border-primary' : 'border-secondary';
  const color: Colors = isCollection ? 'primary' : 'secondary';

  const signalStatusIcons: Record<SignalStatusVariant, IconVariant> = {
    collection: 'backspace',
    replenishment: 'arrows-counter-clockwise',
    request: 'hand',
  };

  const labels: Record<SignalStatusVariant, string> = {
    collection: 'Recolhimento',
    replenishment: 'Reabastecimento',
    request: 'Pedido',
  };

  return (
    <div
      className={`flex w-48 justify-center items-center px-3 py-1 gap-1 border ${borderColor} rounded`}
    >
      <Icon variant={signalStatusIcons[variant]} size='small' color={color} />

      <Text weight='medium' color={color}>
        {labels[variant]}
      </Text>
    </div>
  );
}

export default memo(SignalStatus);
