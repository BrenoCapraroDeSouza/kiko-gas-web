import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  HeaderActionProps,
  HistoricCardProps,
  SignalCardProps,
  TabButtonVariant,
} from '@/@types';
import {
  AddButton,
  ClientCard,
  CylinderCard,
  EmptyList,
  Header,
  HistoricCard,
  List,
  SignalCard,
  Spinner,
} from '@/components';
import { formatCurrency } from '@/helpers';
import { useDashboard, useGetClients, useGetCylinders } from '@/hooks';

const REQUESTS: SignalCardProps[] = [
  {
    id: '1',
    type: 'collection',
    client: {
      id: '1',
      name: 'Benjamin Enrico Alves',
      cpfcnpj: '238.435.761-14',
      address: 'Rua das Flores, 13, Balneário Camboriú - SC, 88129-912',
      phone: '(81) 99770-9226',
      cylinder: {
        id: '1',
        name: 'P13',
        description: 'Residencial',
        price: 140,
        paymentType: null,
        exchange: null,
      },
    },
    createdAt: new Date(),
  },
  {
    id: '2',
    type: 'request',
    client: {
      id: '2',
      name: 'Gabriel da Silva',
      cpfcnpj: '333.456.789-00',
      address: 'Rua das Águas, 122, Itapema - SC, 88129-092',
      phone: '(67) 98684-4681',
      cylinder: {
        id: '2',
        name: 'P20',
        description: 'Industrial',
        price: 140,
        paymentType: 'pix',
        exchange: null,
      },
    },
    createdAt: new Date(),
  },
  {
    id: '3',
    type: 'replenishment',
    client: {
      id: '3',
      name: 'Rafaela Esther Gomes',
      cpfcnpj: '156.776.298-04',
      address: 'Rua das Arvores, 23, Itajaí - SC, 88672-109',
      phone: '(27) 99676-8615',
      cylinder: {
        id: '3',
        name: 'P13',
        description: 'Residencial',
        price: 140,
        paymentType: 'money',
        exchange: 150,
      },
    },
    createdAt: new Date(),
  },
  {
    id: '4',
    type: 'request',
    client: {
      id: '4',
      name: 'Rafaela Esther Gomes',
      cpfcnpj: '156.776.298-04',
      address: 'Rua das Arvores, 23, Itajaí - SC, 88672-109',
      phone: '(27) 99676-8615',
      cylinder: {
        id: '4',
        name: 'P20',
        description: 'Industrial',
        price: 140,
        paymentType: 'money',
        exchange: null,
      },
    },
    createdAt: new Date(),
  },
];

const HISTORICS: HistoricCardProps[] = [
  {
    id: '1',
    type: 'accepted',
    status: 'collection',
    client: {
      id: '1',
      name: 'Benjamin Enrico Alves',
      cpfcnpj: '238.435.761-14',
      address: 'Rua das Flores, 13, Balneário Camboriú - SC, 88129-912',
      cylinder: {
        id: '4',
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
    id: '2',
    type: 'recused',
    status: 'replenishment',
    client: {
      id: '1',
      name: 'Nilson Andrade Neto',
      cpfcnpj: '238.435.001-14',
      address: 'Rua das Flores, 13, Balneário Piçarras - SC, 88129-912',
      cylinder: {
        id: '7',
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
    id: '3',
    type: 'accepted',
    status: 'request',
    client: {
      id: '1',
      name: 'Cauã Ribas Adami Devitte',
      cpfcnpj: '123.435.001-15',
      address: 'Rua das Flores, 13, Ponta Grossa - PR, 88129-912',
      cylinder: {
        id: '7',
        name: 'P13',
        description: 'Industrial',
        price: 140,
        paymentType: 'pix',
        exchange: null,
      },
    },
    createdAt: new Date(),
  },
];

export function Dashboard() {
  const { currentTab } = useDashboard();
  const { clients, isClientLoading, refreshClients } = useGetClients();
  const { cylinders, isCylindersLoading, refreshCylinders } = useGetCylinders();

  const navigate = useNavigate();

  const isClientTab = currentTab === 'clients';
  const shouldShowAddButton = isClientTab || currentTab === 'cylinders';
  const isLoading = isClientLoading && isCylindersLoading;

  function goToRegisterRoute(): void {
    const route = isClientTab ? 'client' : 'cylinder';
    navigate(`/register/${route}`);
  }

  const renderList = useMemo(() => {
    const lists: Record<TabButtonVariant, React.JSX.Element[]> = {
      clients: clients.map(client => (
        <ClientCard {...client} key={client.id} />
      )),
      cylinders: cylinders.map(cylinder => (
        <CylinderCard
          {...cylinder}
          key={cylinder.id}
          price={formatCurrency(cylinder.price)}
        />
      )),
      historic: HISTORICS.map(historic => (
        <HistoricCard {...historic} key={historic.id} /> //------------------------
      )),

      requests: REQUESTS.map(signal => (
        <SignalCard {...signal} key={signal.id} />
      )),
    };

    if (lists[currentTab].length) return <List>{lists[currentTab]}</List>;

    return <EmptyList />;
  }, [currentTab, clients, cylinders]);

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

      {isLoading ? (
        <div className='flex w-full h-full justify-center items-center'>
          <Spinner />
        </div>
      ) : (
        <>{renderList}</>
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
