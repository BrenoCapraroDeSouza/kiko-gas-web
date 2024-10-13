import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import {
  GasCylindersDTOProps,
  RegisterClientDTOProps,
  RegisterClientStep,
} from '@/@types';
import { useToaster } from '@/hooks';

import { FinancialData, RegistrationData } from './components';

const DEFAULT_CYLINDER = [
  {
    id: '1',
    name: 'P5',
    price: 'R$ 71,90',
  },
];

export function RegisterClient() {
  const [currentStep, setCurrentStep] =
    useState<RegisterClientStep>('registration');
  const [defaultCylinders, setDefaultCylinders] =
    useState<GasCylindersDTOProps[]>(DEFAULT_CYLINDER);
  const [newClient, setNewClient] = useState<RegisterClientDTOProps>({
    gasCylinders: DEFAULT_CYLINDER,
  } as RegisterClientDTOProps);

  const navigate = useNavigate();
  const [showToast] = useToaster();

  function goToFinancialStep(
    data: Omit<RegisterClientDTOProps, 'gasCylinders'>,
  ): void {
    setDefaultCylinders(DEFAULT_CYLINDER);
    setNewClient({ ...newClient, ...data });
    setCurrentStep('financial');
  }

  function goBackRegistrationStep(data: GasCylindersDTOProps[]): void {
    setDefaultCylinders(DEFAULT_CYLINDER);
    setNewClient({ ...newClient, gasCylinders: [...data] });
    setCurrentStep('registration');
  }

  function handleFinishRegistration(data: GasCylindersDTOProps[]): void {
    setDefaultCylinders(DEFAULT_CYLINDER);
    setNewClient({ ...newClient, gasCylinders: [...data] });

    showToast(
      'Cliente cadastrado!',
      'Seu novo cliente foi cadastrado com sucesso!',
    );

    navigate('/dashboard', { replace: true });
  }

  return (
    <main className='flex w-full h-screen items-center justify-center p-4 bg-background'>
      {currentStep === 'registration' ? (
        <RegistrationData onNextStep={goToFinancialStep} {...newClient} />
      ) : (
        <FinancialData
          onPreviousStep={goBackRegistrationStep}
          onFinish={handleFinishRegistration}
          gasCylinders={newClient.gasCylinders}
          defaultCylinders={defaultCylinders}
        />
      )}
    </main>
  );
}
