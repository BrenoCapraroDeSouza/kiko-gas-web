import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  RegisterClientCylinder,
  RegisterClientDataProps,
  RegisterClientProps,
  RegisterClientStep,
} from '@/@types';
import { useCreateClient, useGetCylinders, useToaster } from '@/hooks';

import { FinancialData, RegistrationData } from './components';

export function RegisterClient() {
  const [currentStep, setCurrentStep] =
    useState<RegisterClientStep>('registration');
  const [newClient, setNewClient] = useState<RegisterClientProps>(
    {} as RegisterClientProps,
  );

  const navigate = useNavigate();
  const [showToast] = useToaster();
  const { cylinders } = useGetCylinders();
  const {
    isCreateClientError,
    isCreatingClient,
    createClient,
    setIsCreateClientError,
  } = useCreateClient();

  function goToFinancialStep(data: RegisterClientDataProps): void {
    setNewClient({ ...newClient, ...data });
    setCurrentStep('financial');
  }

  function goBackRegistrationStep(data: RegisterClientCylinder[]): void {
    setNewClient({ ...newClient, cylinders: [...data] });
    setCurrentStep('registration');
  }

  async function handleFinishRegistration(
    data: RegisterClientCylinder[],
  ): Promise<void> {
    setNewClient({ ...newClient, cylinders: [...data] });

    const isCreated = await createClient({
      ...newClient,
      cylinders: [...data],
    });

    if (isCreated) {
      showToast(
        'Cliente cadastrado!',
        'Seu novo cliente foi cadastrado com sucesso!',
      );

      navigate('/dashboard', { replace: true });
    }
  }

  useEffect(() => {
    if (isCreateClientError) {
      setIsCreateClientError(false);

      showToast(
        'Ops! Parece que algo não deu certo',
        'Verifique os dados e tente novamente.',
      );
    }
  }, [isCreateClientError, setIsCreateClientError, showToast]);

  return (
    <main className='flex w-full h-screen items-center justify-center p-4 bg-background'>
      {currentStep === 'registration' ? (
        <RegistrationData onNextStep={goToFinancialStep} {...newClient} />
      ) : (
        <FinancialData
          onPreviousStep={goBackRegistrationStep}
          onFinish={handleFinishRegistration}
          cylinders={cylinders}
          defaultCylinders={cylinders}
          isLoading={isCreatingClient}
        />
      )}
    </main>
  );
}
