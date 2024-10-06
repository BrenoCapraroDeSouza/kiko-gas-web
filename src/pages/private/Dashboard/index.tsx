import { Header, TabButton } from '@/components';

export function Dashboard() {
  return (
    <Header
      actions={[
        {
          button: <TabButton key='Meus Clientes' variant='clients' />,
        },
        {
          button: <TabButton key='Meus Botijões' variant='cylinders' />,
        },
        {
          button: <TabButton key='Histórico' variant='historic' />,
        },
        {
          button: <TabButton key='Solicitações' variant='requests' />,
        },
      ]}
    />
  );
}
