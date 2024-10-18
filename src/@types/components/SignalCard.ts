export interface SignalCardProps {
  id: string;
  type: 'collection' | 'replenishment' | 'request';
  client: {
    id: string;
    name: string;
    cpfcnpj: string;
    phone: string;
    address: string;
    cylinder: {
      id: string;
      name: string;
      description: string;
      price: number;
      paymentType: 'money' | 'pix';
      exchange: number | null;
    };
  };
  isDisabled?: boolean;
  createdAt: Date;
}
