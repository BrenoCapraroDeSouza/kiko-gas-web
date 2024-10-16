import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  CylinderDTO,
  RegisterClientDTOProps,
  RegisterClientStep,
} from '@/@types';
import { useCreateClient, useGetCylinders, useToaster } from '@/hooks';

import { FinancialData, RegistrationData } from './components';

export function RegisterClient() {
  const [currentStep, setCurrentStep] =
    useState<RegisterClientStep>('registration');
  const [newClient, setNewClient] = useState<RegisterClientDTOProps>(
    {} as RegisterClientDTOProps,
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

  function goToFinancialStep(
    data: Omit<RegisterClientDTOProps, 'gasCylinders'>,
  ): void {
    setNewClient({ ...newClient, ...data });
    setCurrentStep('financial');
  }

  function goBackRegistrationStep(data: CylinderDTO[]): void {
    setNewClient({ ...newClient, gasCylinders: [...data] });
    setCurrentStep('registration');
  }

  async function handleFinishRegistration(data: CylinderDTO[]): Promise<void> {
    setNewClient({ ...newClient, gasCylinders: [...data] });

    const isCreated = await createClient({
      ...newClient,
      gasCylinders: [...data],
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
          gasCylinders={cylinders}
          defaultCylinders={cylinders}
          isLoading={isCreatingClient}
        />
      )}
    </main>
  );
}
