import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderActionProps } from '@/@types';
import { AddButton, ClientCard, EmptyList, Header, List } from '@/components';
import { useDashboard } from '@/hooks';

const CLIENTS = [
  {
    id: '1',
    name: 'Daniel Sansão Araldi',
    cpfcnpj: '347.263.990-39',
    email: 'danielsaraldi@gmail.com',
    phone: '(47) 9 9650-7698',
  },
  {
    id: '2',
    name: 'Nilson Andrade Neto',
    cpfcnpj: '49.296.492/0001-01',
    email: 'nilsonaneto@gmail.com',
    phone: '(47) 9 9646-1843',
  },
];

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

      {CLIENTS.length ? (
        <List>
          {CLIENTS.map(client => (
            <ClientCard key={client.id} {...client} />
          ))}
        </List>
      ) : (
        <EmptyList />
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
