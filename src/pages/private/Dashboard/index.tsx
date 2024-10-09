import { useMemo } from 'react';

import { HeaderActionProps } from '@/@types';
import { EmptyList, Header } from '@/components';

export function Dashboard() {
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
    </main>
  );
}
