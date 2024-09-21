export interface GasCylidersDTOProps {
  id: string;
  name: string;
  description: string;
  price: string;
}

export interface RegisterClientDTOProps {
  name: string;
  email: string;
  cpfcnpj: string;
  phone: string;
  password: string;
  confirmPassword: string;
  gasCylinders: GasCylidersDTOProps[];
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
  onFinish: (data: Pick<RegisterClientDTOProps, 'gasCylinders'>) => void;
};
