import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import { HeaderActionProps, SignalCardProps } from '@/@types';
import {
  AddButton,
  ClientCard,
  CylinderCard,
  // EmptyList,
  Header,
  List,
  SignalCard,
  Spinner,
} from '@/components';
import { formatCurrency } from '@/helpers';
import { useDashboard, useGetClients, useGetCylinders } from '@/hooks';

export function Dashboard() {
  const { currentTab } = useDashboard();
  const { clients, isClientLoading, refreshClients } = useGetClients();
  const { cylinders, isCylindersLoading, refreshCylinders } = useGetCylinders();
  const requests: SignalCardProps[] = [
    {
      id: '01',
      type: 'collection',
      client: {
        id: 'testCliente',
        name: 'João da Silva',
        cpfcnpj: '123.456.789-00',
        address: 'Rua das Flores, 123',
        phone: '(11) 1234-5678',
        cylinder: {
          id: 'testCilindro',
          name: 'P13',
          description: 'Residencial',
          price: 140,
          paymentType: 'money',
          exchange: null,
        },
      },
      createdAt: new Date(),
    },
    {
      id: '02',
      type: 'request',
      client: {
        id: 'testCliente',
        name: 'Gabriel da Silva',
        cpfcnpj: '333.456.789-00',
        address: 'Rua das Aguas, 122',
        phone: '(11) 3334-5678',
        cylinder: {
          id: 'testCilindro',
          name: 'P20',
          description: 'Industrial',
          price: 140,
          paymentType: 'money',
          exchange: null,
        },
      },
      createdAt: new Date(),
    },
    {
      id: '03',
      type: 'replenishment',
      client: {
        id: 'testCliente',
        name: 'Antonio da Silva',
        cpfcnpj: '321.456.789-00',
        address: 'Rua das Arvores, 123',
        phone: '(11) 1234-5678',
        cylinder: {
          id: 'testCilindro',
          name: 'P13',
          description: 'Residencial',
          price: 140,
          paymentType: 'money',
          exchange: null,
        },
      },
      createdAt: new Date(),
    },
    {
      id: '04',
      type: 'collection',
      client: {
        id: 'testCliente',
        name: 'João da Silva',
        cpfcnpj: '123.456.789-00',
        address: 'Rua das Flores, 123',
        phone: '(11) 1234-5678',
        cylinder: {
          id: 'testCilindro',
          name: 'P13',
          description: 'Residencial',
          price: 140,
          paymentType: 'money',
          exchange: null,
        },
      },
      createdAt: new Date(),
    },
    {
      id: '05',
      type: 'replenishment',
      client: {
        id: 'testCliente',
        name: 'João da Silva',
        cpfcnpj: '123.456.789-00',
        address: 'Rua das Flores, 123',
        phone: '(11) 1234-5678',
        cylinder: {
          id: 'testCilindro',
          name: 'P13',
          description: 'Residencial',
          price: 140,
          paymentType: 'money',
          exchange: null,
        },
      },
      createdAt: new Date(),
    },
  ];
  const navigate = useNavigate();

  const isClientTab = currentTab === 'clients';
  const isCylinderTab = currentTab === 'cylinders';
  const isRequestTab = currentTab === 'requests';
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
            <List>
              {isRequestTab &&
                requests.map(item => (
                  <SignalCard
                    key={item.id}
                    id={item.id}
                    type={item.type}
                    client={item.client}
                    createdAt={item.createdAt}
                  />
                ))}
            </List>
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
