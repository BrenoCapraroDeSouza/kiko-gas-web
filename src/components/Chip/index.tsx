import { memo } from 'react';

import { ChipProps, ChipVariant } from '@/@types';

import { Text } from '..';

function Chip(props: ChipProps) {
  const { variant } = props;

  const shouldCollect = variant === 'refused' || variant === 'collection';
  const borderColor = shouldCollect ? 'border-primary' : 'border-secondary';

  const labels: Record<ChipVariant, string> = {
    accepted: 'Aceito',
    refused: 'Recusado',
    collection: 'Recolhimento',
    replenishment: 'Reabastecimento',
    request: 'Pedido',
  };

  return (
    <div
      className={`w-max px-3 py-1 bg-content border ${borderColor} rounded-2xl`}
    >
      <Text size='small' color={shouldCollect ? 'primary' : 'secondary'}>
        {labels[variant]}
      </Text>
    </div>
  );
}

export default memo(Chip);
