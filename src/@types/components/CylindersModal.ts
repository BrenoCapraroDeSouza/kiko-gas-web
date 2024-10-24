export interface ItemCylindersModalProps {
  id: string;
  name: string;
  description: string;
  price: number;
}

export interface CylindersModalProps {
  isOpen: boolean;
  advertise: string;
  cylinders: ItemCylindersModalProps[];
  onClose: () => void;
}
