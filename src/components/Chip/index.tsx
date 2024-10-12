import { memo } from 'react';

import { Text } from '..';

export type ChipVariant = 'accepted' | 'refused';

export interface ChipProps {
  variant: ChipVariant;
}

function Chip(props: ChipProps) {
  const { variant } = props;

  const isAccepted = variant === 'accepted';
  const borderColor = isAccepted ? 'border-secondary' : 'border-primary';
  const labels: Record<ChipVariant, string> = {
    accepted: 'Aceito',
    refused: 'Recusado',
  };

  return (
    <div
      className={`flex px-3 py-1 bg-content border ${borderColor} rounded-2xl`}
    >
      <Text size='small' color={isAccepted ? 'secondary' : 'primary'}>
        {labels[variant]}
      </Text>
    </div>
  );
}

export default memo(Chip);
