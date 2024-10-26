import { FormEvent, useEffect, useState } from 'react';

import { CredentialsLoginProps } from '@/@types';
import { Button, Input, Text } from '@/components';
import { PRIMARY_LOGO } from '@/config';
import { useAuth, useLogin, useToaster } from '@/hooks';

export function Login() {
  const { changeToLogged } = useAuth();
  const { isLoginError, isLoginLoading, setIsLoginError, login } = useLogin();

  const [showToast] = useToaster();

  const [userCredentials, setUserCredentials] = useState<CredentialsLoginProps>(
    {} as CredentialsLoginProps,
  );

  async function onSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    await login(userCredentials);

    changeToLogged();
  }

  useEffect(() => {
    if (isLoginError) {
      setIsLoginError(false);

      return showToast(
        'Ops! Parece que algo não deu certo',
        'Verifique suas credenciais e tente novamente.',
      );
    }
  }, [isLoginError, setIsLoginError, showToast]);

  return (
    <main className='flex h-screen bg-background'>
      <div className='flex flex-1 justify-center items-center'>
        <img src={PRIMARY_LOGO} alt='Logo do Kiko Gás' className='w-72 h-60' />
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
              value={userCredentials?.email}
              placeholder='E-mail'
              minLength={6}
              isDisabled={isLoginLoading}
              isRequired
              isHugWidth
              onChangeText={email =>
                setUserCredentials({ ...userCredentials, email })
              }
            />

            <Input
              type='password'
              value={userCredentials?.password}
              placeholder='Senha'
              minLength={6}
              isDisabled={isLoginLoading}
              isRequired
              isHugWidth
              onChangeText={password =>
                setUserCredentials({ ...userCredentials, password })
              }
            />
          </div>

          <Button
            type='submit'
            title='Entrar'
            isDisabled={isLoginLoading}
            isLoading={isLoginLoading}
            isHugWidth
          />
        </form>
      </aside>
    </main>
  );
}
