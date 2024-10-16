export interface AddressDTO {
  name: string;
  address: string;
}

export interface ClientDTO {
  id: string;
  userId: string;
  resaleId: string;
  cpfcnpj: string;
  email: string;
  phone: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  addresses: AddressDTO[];
}
