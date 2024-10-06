import { memo } from 'react';

import { EmptyListProps, EmptyListVariant } from '@/@types';

import { Icon, Text } from '..';

function EmptyList(props: EmptyListProps) {
  const { variant } = props;

  const emptyTitles: Record<EmptyListVariant, string> = {
    clients: 'Nenhum cliente encontrado',
    cylinders: 'Nenhum gás encontrado',
    historic: 'Sem registros no histórico',
    requests: 'Sem solicitações no momento',
  };

  const emptyDescriptions: Record<EmptyListVariant, string> = {
    clients: 'Que tal adicionar um novo cliente ou verificar mais tarde?',
    cylinders: 'Que tal adicionar um novo gás ou verificar mais tarde?',
    historic: 'Que tal passar aqui mais tarde?',
    requests: 'Que tal passar aqui mais tarde?',
  };

  return (
    <div className='flex flex-col size-full justify-center items-center'>
      <Icon variant='tray' size='giant' />

      <Text size='alternative' weight='semibold' className='mt-4 mb-1'>
        {emptyTitles[variant]}
      </Text>

      <Text weight='medium'>{emptyDescriptions[variant]}</Text>
    </div>
  );
}

export default memo(EmptyList);
