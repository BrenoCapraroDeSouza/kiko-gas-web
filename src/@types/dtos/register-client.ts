import { CylinderDTO } from '../services';

export interface RegisterClientDTOProps {
  name: string;
  email: string;
  cpfcnpj: string;
  phone: string;
  password: string;
  confirmPassword: string;
  gasCylinders: CylinderDTO[];
}

export type RegistrationClientDTOProps = Omit<
  RegisterClientDTOProps,
  'gasCylinders'
> & {
  onNextStep: (data: Omit<RegisterClientDTOProps, 'gasCylinders'>) => void;
};

export type FinancialClientDTOProps = Pick<
  RegisterClientDTOProps,
  'gasCylinders'
> & {
  isLoading: boolean;
  defaultCylinders: CylinderDTO[];
  onPreviousStep: (data: CylinderDTO[]) => void;
  onFinish: (data: CylinderDTO[]) => Promise<void>;
};
