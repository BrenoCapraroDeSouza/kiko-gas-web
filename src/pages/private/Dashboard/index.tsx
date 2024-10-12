import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderActionProps } from '@/@types';
import { AddButton, EmptyList, Header } from '@/components';
import { useDashboard } from '@/hooks';

export function Dashboard() {
  const { currentTab } = useDashboard();
  const navigate = useNavigate();

  const isClientTab = currentTab === 'clients';
  const shouldShowAddButton = isClientTab || currentTab === 'cylinders';

  function goToRegisterRoute(): void {
    const route = isClientTab ? 'client' : 'cylinder';
    navigate(`/register/${route}`);
  }

  const actions = useMemo<HeaderActionProps[]>(
    () => [
      {
        key: 'clients',
        variant: 'clients',
      },
      {
        key: 'cylinders',
        variant: 'cylinders',
      },
      {
        key: 'historic',
        variant: 'historic',
      },
      {
        key: 'requests',
        variant: 'requests',
      },
    ],
    [],
  );

  return (
    <main className='flex flex-col w-full h-screen'>
      <Header actions={actions} />

      <EmptyList />

      {shouldShowAddButton && (
        <AddButton
          variant={isClientTab ? 'user-plus' : 'plus'}
          title={isClientTab ? 'Cadastrar novo cliente' : 'Cadastrar novo gás'}
          onClick={goToRegisterRoute}
        />
      )}
    </main>
  );
}
