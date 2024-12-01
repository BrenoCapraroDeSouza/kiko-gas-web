export type HistoricCardStatus = 'COLLECTION' | 'REPLENISHMENT' | 'REQUEST';

export type HistoricCardType = 'ACCEPTED' | 'REFUSED';

export type HistoricPaymentType = 'PIX' | 'MONEY';

export interface HistoricCardCylinderProps {
  id: string;
  name: string;
  description: string;
  price: number;
  paymentType: HistoricPaymentType | null;
  exchange: number | null;
}

export interface HistoricCardClientProps {
  id: string;
  name: string;
  cpfcnpj: string;
  address: string;
  cylinder: HistoricCardCylinderProps;
}

export interface HistoricCardProps {
  id: string;
  status: HistoricCardStatus;
  type: HistoricCardType;
  client: HistoricCardClientProps;
  createdAt: Date;
}
