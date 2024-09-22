import { FormEvent, memo, useState } from 'react';

import { RegistrationClientDTOProps } from '@/@types';
import { Button, Input, Text } from '@/components';
import { useToaster } from '@/hooks';
import { getOnlyNumbers } from '@/utils';

function RegistrationData(props: RegistrationClientDTOProps) {
  const { onNextStep, ...rest } = props;

  const [showToast] = useToaster();

  const [registration, setRegistration] = useState<
    Omit<RegistrationClientDTOProps, 'onNextStep'>
  >({
    ...rest,
  });

  function handlePasswordQuality(): boolean {
    if (registration.password.length < 6) {
      showToast('Senha muito curta!', 'Informe uma senha maior que 6 dígitos.');
      return true;
    } else if (registration.password !== registration.confirmPassword) {
      showToast('Senhas incorretas!', 'As senhas informadas devem ser iguais.');
      return true;
    }

    return false;
  }

  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    if (handlePasswordQuality()) return;

    onNextStep(registration);
  }

  const isCNPJ = registration.cpfcnpj && registration.cpfcnpj.includes('/');
  const isValidPhone = !!(
    registration.phone && getOnlyNumbers(registration.phone).length === 11
  );
  const isValidDocument = !!(
    registration.cpfcnpj &&
    getOnlyNumbers(registration.cpfcnpj).length === (isCNPJ ? 14 : 11)
  );

  const isDisabled =
    !registration.name ||
    !registration.email ||
    !registration.password ||
    !registration.confirmPassword ||
    !isValidPhone ||
    !isValidDocument;

  return (
    <div className='w-189 h-auto px-14 py-10 bg-content rounded-2xl'>
      <Text size='alternative' weight='semibold' className='text-center mb-7'>
        Complete os campos abaixo para criar uma conta para <br />o seu cliente.
      </Text>

      <Text weight='semibold' className='text-center mb-5'>
        Dados Cadastrais
      </Text>

      <form onSubmit={onSubmit}>
        <div className='flex flex-col mb-5 gap-5'>
          <Input
            value={registration.name}
            type='text'
            placeholder='Nome'
            onChangeText={name => setRegistration({ ...registration, name })}
          />

          <Input
            value={registration.email}
            type='email'
            placeholder='E-mail'
            onChangeText={email => setRegistration({ ...registration, email })}
          />

          <Input
            value={registration.cpfcnpj}
            type='document'
            placeholder='CPF/CNPJ'
            onChangeText={cpfcnpj =>
              setRegistration({ ...registration, cpfcnpj })
            }
          />

          <Input
            value={registration.phone}
            type='tel'
            placeholder='Telefone'
            onChangeText={phone => setRegistration({ ...registration, phone })}
          />

          <Input
            value={registration.password}
            type='password'
            placeholder='Senha'
            onChangeText={password =>
              setRegistration({ ...registration, password })
            }
          />

          <Input
            value={registration.confirmPassword}
            type='password'
            placeholder='Confirmar Senha'
            onChangeText={confirmPassword =>
              setRegistration({ ...registration, confirmPassword })
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
  );
}

export default memo(RegistrationData);
