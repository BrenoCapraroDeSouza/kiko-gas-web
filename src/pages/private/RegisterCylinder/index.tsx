import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RegisterCylinderDTOProps } from '@/@types';
import { Button, Input, Text } from '@/components';
import { useToaster } from '@/hooks';

export function RegisterCylinder() {
  const [registration, setRegistration] = useState<RegisterCylinderDTOProps>(
    {} as RegisterCylinderDTOProps,
  );

  const navigate = useNavigate();
  const [showToast] = useToaster();

  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    showToast('Gás adicionado!', 'Seu novo gás foi adicionado com sucesso!');

    navigate('/dashboard', { replace: true });
  }

  const isDisabled =
    !registration.name ||
    !registration.price ||
    !registration.weight ||
    !registration.description;

  return (
    <main className='flex flex-col w-full h-screen items-center justify-center p-4 bg-background'>
      <div className='w-189 h-auto px-14 py-10 bg-content rounded-2xl'>
        <Text size='alternative' weight='semibold' className='text-center mb-7'>
          Complete os campos abaixo para adicionar um novo botijão de gás.
        </Text>

        <Text weight='semibold' className='text-center mb-5'>
          Dados do Botijão
        </Text>

        <form onSubmit={onSubmit}>
          <div className='flex flex-col mb-5 gap-5'>
            <Input
              placeholder='Nome'
              onChangeText={name => setRegistration({ ...registration, name })}
            />

            <Input
              placeholder='Descrição'
              onChangeText={description =>
                setRegistration({ ...registration, description })
              }
            />

            <Input
              type='currency'
              placeholder='Preço'
              onChangeText={price =>
                setRegistration({ ...registration, price })
              }
            />

            <Input
              type='weight'
              placeholder='Peso'
              onChangeText={weight =>
                setRegistration({ ...registration, weight })
              }
            />
          </div>

          <div className='flex w-64 ml-auto'>
            <Button
              type='submit'
              title='Adicionar'
              isDisabled={isDisabled}
              isHugWidth
            />
          </div>
        </form>
      </div>
    </main>
  );
}
