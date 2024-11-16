import { CylinderResponseProps } from '../services';

export type RegisterClientStep = 'registration' | 'financial';

export type RegisterClientCylinder = CylinderResponseProps;

export interface RegisterClientProps {
  name: string;
  email: string;
  cpfcnpj: string;
  phone: string;
  password: string;
  confirmPassword: string;
  cylinders: RegisterClientCylinder[];
}

export type RegisterClientDataProps = Omit<RegisterClientProps, 'cylinders'>;

export type RegistrationClientProps = RegisterClientDataProps & {
  onNextStep: (data: RegisterClientDataProps) => void;
};

export type RegistrationClientDataProps = Omit<
  RegistrationClientProps,
  'onNextStep'
>;

export type FinancialClientProps = Pick<RegisterClientProps, 'cylinders'> & {
  isLoading: boolean;
  defaultCylinders: RegisterClientCylinder[];
  onPreviousStep: (data: RegisterClientCylinder[]) => void;
  onFinish: (data: RegisterClientCylinder[]) => Promise<void>;
};
