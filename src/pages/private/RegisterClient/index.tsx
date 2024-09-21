import { FormEvent, useState } from 'react';

import { RegisterClientDTOProps } from '@/@types';
import { Button, Input, Text } from '@/components';
import { useToaster } from '@/hooks';

export function RegisterClient() {
  const [showToast] = useToaster();

  const [newClient, setNewClient] = useState<RegisterClientDTOProps>(
    {} as RegisterClientDTOProps,
  );

  function handlePasswordQuality(): boolean {
    if (newClient.password.length < 6) {
      showToast('Senha muito curta!', 'Informe uma senha maior que 6 dígitos.');
      return true;
    } else if (newClient.password !== newClient.confirmPassword) {
      showToast('Senhas incorretas!', 'As senhas informadas devem ser iguais.');
      return true;
    }

    return false;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (handlePasswordQuality()) return;
  }

  const isValidPhone = !!(newClient.phone && newClient.phone.length === 16);
  const isValidDocument = !!(
    newClient.cpfcnpj &&
    (newClient.cpfcnpj.length === 14 || newClient.cpfcnpj.length === 18)
  );

  const isDisabled =
    !newClient.name ||
    !newClient.email ||
    !newClient.password ||
    !newClient.confirmPassword ||
    !isValidPhone ||
    !isValidDocument;

  return (
    <main className='flex w-full h-screen items-center justify-center p-4 bg-background'>
      <div className='w-189 h-auto px-14 py-10 bg-content rounded-2xl'>
        <Text size='alternative' weight='semibold' className='text-center mb-7'>
          Complete os campos abaixo para criar uma conta para <br />o seu
          cliente.
        </Text>

        <Text weight='semibold' className='text-center mb-5'>
          Dados Cadastrais
        </Text>

        <form onSubmit={onSubmit}>
          <div className='flex flex-col mb-5 gap-5'>
            <Input
              value={newClient.name}
              type='text'
              placeholder='Nome'
              onChangeText={name => setNewClient({ ...newClient, name })}
            />

            <Input
              value={newClient.email}
              type='email'
              placeholder='E-mail'
              onChangeText={email => setNewClient({ ...newClient, email })}
            />

            <Input
              value={newClient.cpfcnpj}
              type='document'
              placeholder='CPF/CNPJ'
              onChangeText={cpfcnpj => setNewClient({ ...newClient, cpfcnpj })}
            />

            <Input
              value={newClient.phone}
              type='tel'
              placeholder='Telefone'
              onChangeText={phone => setNewClient({ ...newClient, phone })}
            />

            <Input
              value={newClient.password}
              type='password'
              placeholder='Senha'
              onChangeText={password =>
                setNewClient({ ...newClient, password })
              }
            />

            <Input
              value={newClient.confirmPassword}
              type='password'
              placeholder='Confirmar Senha'
              onChangeText={confirmPassword =>
                setNewClient({ ...newClient, confirmPassword })
              }
            />
          </div>

          <div className='flex w-64 ml-auto'>
            <Button
              type='submit'
              title='Próximo'
              isDisabled={isDisabled}
              isHugWidth
            />
          </div>
        </form>
      </div>
    </main>
  );
}
