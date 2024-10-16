import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderActionProps } from '@/@types';
import {
  AddButton,
  ClientCard,
  CylinderCard,
  EmptyList,
  Header,
  List,
  Spinner,
} from '@/components';
import { formatCurrency } from '@/helpers';
import { useDashboard, useGetClients, useGetCylinders } from '@/hooks';

export function Dashboard() {
  const { currentTab } = useDashboard();
  const { clients, isClientLoading, refreshClients } = useGetClients();
  const { cylinders, isCylindersLoading, refreshCylinders } = useGetCylinders();
  const navigate = useNavigate();

  const isClientTab = currentTab === 'clients';
  const isCylinderTab = currentTab === 'cylinders';
  const shouldShowAddButton = isClientTab || currentTab === 'cylinders';
  const hasItems = clients.length || cylinders.length;
  const hasList = isClientTab || isCylinderTab;
  const isLoading = isClientLoading && isCylindersLoading;

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

  const refreshes = useMemo(
    () => ({
      clients: () => refreshClients(),
      cylinders: () => refreshCylinders(),
      historic: () => {},
      requests: () => {},
    }),
    [refreshClients, refreshCylinders],
  );

  useEffect(() => {
    refreshes[currentTab]();
  }, [currentTab, isClientTab, refreshes]);

  return (
    <main className='flex flex-col w-full h-screen'>
      <Header actions={actions} />

      {hasItems && hasList ? (
        <List>
          {isClientTab &&
            clients.map(item => (
              <ClientCard
                key={item.id}
                id={item.id}
                name={item.name}
                cpfcnpj={item.cpfcnpj}
                phone={item.phone}
                email={item.email}
              />
            ))}

          {isCylinderTab &&
            cylinders.map(item => (
              <CylinderCard
                key={item.id}
                id={item.id}
                cylinderName={item.name}
                cylinderDescription={item.description}
                price={formatCurrency(item.price)}
              />
            ))}
        </List>
      ) : (
        <>
          {isLoading ? (
            <div className='flex w-full h-full justify-center items-center'>
              <Spinner />
            </div>
          ) : (
            <EmptyList />
          )}
        </>
      )}

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
