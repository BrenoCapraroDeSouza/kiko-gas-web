export interface GasCylindersDTOProps {
  id: string;
  name: string;
  price: string;
}

export interface RegisterClientDTOProps {
  name: string;
  email: string;
  cpfcnpj: string;
  phone: string;
  password: string;
  confirmPassword: string;
  gasCylinders: GasCylindersDTOProps[];
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
  defaultCylinders: GasCylindersDTOProps[];
  onPreviousStep: (data: GasCylindersDTOProps[]) => void;
  onFinish: (data: GasCylindersDTOProps[]) => void;
};
