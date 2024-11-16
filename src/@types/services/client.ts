export interface ClientAddressResponseProps {
  name: string;
  address: string;
}

export interface ClientResponseProps {
  id: string;
  userId: string;
  resaleId: string;
  cpfcnpj: string;
  email: string;
  phone: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  addresses: ClientAddressResponseProps[];
}
