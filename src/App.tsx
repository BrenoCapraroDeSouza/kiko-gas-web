import { FormEvent, useState } from 'react';

import { Button, Input, Text } from '@/components';
import { PRIMARY_LOGO } from '@/config';

import { LoginDTOProps } from './@types';

function App() {
  const [userCredentials, setUserCredentials] = useState<LoginDTOProps>(
    {} as LoginDTOProps,
  );

  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  return (
    <main className='flex h-screen bg-background'>
      <div className='flex flex-1 justify-center items-center'>
        <img src={PRIMARY_LOGO} alt='Logo do Kiko Gás' className='w-64 h-60' />
      </div>

      <aside className='flex flex-col w-128 bg-content justify-center items-center px-16 py-8 border-l border-secondary'>
        <div className='flex flex-col mb-10 gap-7'>
          <Text size='title' weight='semibold' className='text-center'>
            Bem-vindo(a)!
          </Text>

          <Text size='alternative' weight='medium' className='text-center'>
            Por favor, insira suas credenciais para acessar sua conta.
          </Text>
        </div>

        <form className='flex flex-col w-full gap-16' onSubmit={onSubmit}>
          <div className='flex flex-col gap-6'>
            <Input
              type='email'
              placeholder='E-mail'
              onChangeText={email =>
                setUserCredentials({ ...userCredentials, email })
              }
              isRequired
              isHugWidth
            />

            <Input
              type='password'
              placeholder='Senha'
              onChangeText={password =>
                setUserCredentials({ ...userCredentials, password })
              }
              isRequired
              isHugWidth
            />
          </div>

          <Button type='submit' title='Entrar' isHugWidth />
        </form>
      </aside>
    </main>
  );
}

export default App;
