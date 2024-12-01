export type SignalCardType = 'COLLECTION' | 'REPLENISHMENT' | 'REQUEST';

export type SignalPaymentType = 'PIX' | 'MONEY';

export interface SignalCardCylinderProps {
  id: string;
  name: string;
  description: string;
  price: number;
  paymentType: SignalPaymentType | null;
  exchange: number | null;
}

export interface SignalCardClientProps {
  id: string;
  name: string;
  cpfcnpj: string;
  phone: string;
  address: string;
  cylinder: SignalCardCylinderProps;
}

export interface SignalCardProps {
  id: string;
  type: SignalCardType;
  client: SignalCardClientProps;
  createdAt: Date;
  isDisabled?: boolean;
}
