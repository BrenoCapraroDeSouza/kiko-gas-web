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

  const isCollection = variant === 'COLLECTION';
  const borderColor = isCollection ? 'border-primary' : 'border-secondary';
  const color: Colors = isCollection ? 'primary' : 'secondary';

  const signalStatusIcons: Record<SignalStatusVariant, IconVariant> = {
    COLLECTION: 'backspace',
    REPLENISHMENT: 'arrows-counter-clockwise',
    REQUEST: 'hand',
  };

  const labels: Record<SignalStatusVariant, string> = {
    COLLECTION: 'Recolhimento',
    REPLENISHMENT: 'Reabastecimento',
    REQUEST: 'Pedido',
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
