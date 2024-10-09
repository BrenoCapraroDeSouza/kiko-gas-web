import { memo } from 'react';

import { DashboardTabType } from '@/@types';
import { useDashboard } from '@/hooks';

import { Icon, Text } from '..';

function EmptyList() {
  const { currentTab } = useDashboard();

  const emptyTitles: Record<DashboardTabType, string> = {
    clients: 'Nenhum cliente encontrado',
    cylinders: 'Nenhum gás encontrado',
    historic: 'Sem registros no histórico',
    requests: 'Sem solicitações no momento',
  };

  const emptyDescriptions: Record<DashboardTabType, string> = {
    clients: 'Que tal adicionar um novo cliente ou verificar mais tarde?',
    cylinders: 'Que tal adicionar um novo gás ou verificar mais tarde?',
    historic: 'Que tal passar aqui mais tarde?',
    requests: 'Que tal passar aqui mais tarde?',
  };

  return (
    <div className='flex flex-col size-full justify-center items-center'>
      <Icon variant='tray' size='giant' />

      <Text size='alternative' weight='semibold' className='mt-4 mb-1'>
        {emptyTitles[currentTab]}
      </Text>

      <Text weight='medium'>{emptyDescriptions[currentTab]}</Text>
    </div>
  );
}

export default memo(EmptyList);
