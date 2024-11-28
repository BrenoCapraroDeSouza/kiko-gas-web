export interface CylinderCardProps {
  id: string;
  name: string;
  description: string;
  price: number;
  weight: number;
  isDisabled?: boolean;
}

export type EditCylinderCardProps = Omit<CylinderCardProps, 'isDisabled'>;
