import { useState } from 'react';

import { RegisterClientDTOProps } from '@/@types';

import { RegistrationData } from './components';

export function RegisterClient() {
  const [newClient, setNewClient] = useState<RegisterClientDTOProps>(
    {} as RegisterClientDTOProps,
  );

  console.log(newClient);

  return (
    <main className='flex w-full h-screen items-center justify-center p-4 bg-background'>
      <RegistrationData
        onNextStep={data => setNewClient({ ...newClient, ...data })}
        {...newClient}
      />
    </main>
  );
}
