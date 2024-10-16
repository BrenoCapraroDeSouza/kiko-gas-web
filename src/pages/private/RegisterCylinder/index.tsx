import { FormEvent, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { RegisterCylinderDTOProps } from '@/@types';
import { Button, Input, Text } from '@/components';
import { currencyToNumber } from '@/helpers';
import { useCreateCylinder, useDashboard, useToaster } from '@/hooks';
import { removeKgSuffix } from '@/utils';

export function RegisterCylinder() {
  const [registration, setRegistration] = useState<RegisterCylinderDTOProps>(
    {} as RegisterCylinderDTOProps,
  );

  const navigate = useNavigate();
  const [showToast] = useToaster();
  const { changeToNextTab } = useDashboard();
  const {
    isCreateCylinderError,
    isCreatingCylinder,
    setIsCreateCylinderError,
    createCylinder,
  } = useCreateCylinder();

  async function onSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const isCreated = await createCylinder(registration);

    if (isCreated) {
      changeToNextTab('cylinders');
      showToast('Gás adicionado!', 'Seu novo gás foi adicionado com sucesso!');

      navigate('/dashboard', { replace: true });
    }
  }

  const isDisabled =
    !registration.name ||
    !registration.price ||
    !registration.weight ||
    !registration.description;

  useEffect(() => {
    if (isCreateCylinderError) {
      setIsCreateCylinderError(false);

      showToast(
        'Ops! Parece que algo não deu certo',
        'Verifique os dados e tente novamente.',
      );
    }
  }, [isCreateCylinderError, setIsCreateCylinderError, showToast]);

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
              isDisabled={isCreatingCylinder}
              isRequired
              onChangeText={name => setRegistration({ ...registration, name })}
            />

            <Input
              placeholder='Descrição'
              isDisabled={isCreatingCylinder}
              isRequired
              onChangeText={description =>
                setRegistration({ ...registration, description })
              }
            />

            <Input
              type='currency'
              placeholder='Preço'
              isDisabled={isCreatingCylinder}
              isRequired
              onChangeText={price =>
                setRegistration({
                  ...registration,
                  price: currencyToNumber(price),
                })
              }
            />

            <Input
              type='weight'
              placeholder='Peso'
              isDisabled={isCreatingCylinder}
              isRequired
              onChangeText={weight =>
                setRegistration({
                  ...registration,
                  weight: currencyToNumber(removeKgSuffix(weight)),
                })
              }
            />
          </div>

          <div className='flex w-64 ml-auto'>
            <Button
              type='submit'
              title='Adicionar'
              isLoading={isCreatingCylinder}
              isDisabled={isDisabled || isCreatingCylinder}
              isHugWidth
            />
          </div>
        </form>
      </div>
    </main>
  );
}
