export type RequestResponseType = 'COLLECTION' | 'REPLENISHMENT' | 'REQUEST';

export type RequestResponsePaymentType = 'PIX' | 'MONEY';

export interface RequestResponseClientCylinderProps {
  id: string;
  name: string;
  description: string;
  paymentType: RequestResponsePaymentType;
  price: number;
  exchange: number | null;
}

export interface RequestResponseClientProps {
  id: string;
  name: string;
  cpfcnpj: string;
  phone: string;
  address: string;
  cylinder: RequestResponseClientCylinderProps;
}

export interface RequestResponseProps {
  id: string;
  resaleId: string;
  type: RequestResponseType;
  createdAt: Date;
  client: RequestResponseClientProps;
}
