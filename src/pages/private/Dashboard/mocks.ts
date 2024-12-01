import { HistoricCardProps } from '@/@types';

export const HISTORIES: HistoricCardProps[] = [
  {
    id: '1',
    type: 'ACCEPTED',
    status: 'COLLECTION',
    client: {
      id: '1',
      name: 'Benjamin Enrico Alves',
      cpfcnpj: '238.435.761-14',
      address: 'Rua das Flores, 13, Balneário Camboriú - SC, 88129-912',
      cylinder: {
        id: '4',
        name: 'P20',
        description: 'Industrial',
        price: 140,
        paymentType: 'MONEY',
        exchange: null,
      },
    },
    createdAt: new Date(),
  },
  {
    id: '2',
    type: 'REFUSED',
    status: 'REPLENISHMENT',
    client: {
      id: '1',
      name: 'Nilson Andrade Neto',
      cpfcnpj: '238.435.001-14',
      address: 'Rua das Flores, 13, Balneário Piçarras - SC, 88129-912',
      cylinder: {
        id: '7',
        name: 'P20',
        description: 'Industrial',
        price: 140,
        paymentType: 'MONEY',
        exchange: null,
      },
    },
    createdAt: new Date(),
  },
  {
    id: '3',
    type: 'ACCEPTED',
    status: 'REQUEST',
    client: {
      id: '1',
      name: 'Cauã Ribas Adami Devitte',
      cpfcnpj: '123.435.001-15',
      address: 'Rua das Flores, 13, Ponta Grossa - PR, 88129-912',
      cylinder: {
        id: '7',
        name: 'P13',
        description: 'Industrial',
        price: 140,
        paymentType: 'PIX',
        exchange: null,
      },
    },
    createdAt: new Date(),
  },
  {
    id: '4',
    type: 'ACCEPTED',
    status: 'REQUEST',
    client: {
      id: '1',
      name: 'Cauã Ribas Adami Devitte',
      cpfcnpj: '123.435.001-15',
      address: 'Rua das Flores, 13, Ponta Grossa - PR, 88129-912',
      cylinder: {
        id: '8',
        name: 'P20',
        description: 'Comercial',
        price: 140,
        paymentType: 'MONEY',
        exchange: 150,
      },
    },
    createdAt: new Date(),
  },
];
