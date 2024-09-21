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
