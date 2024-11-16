export interface EditCylinderDataModalProps {
  id: string;
  name: string;
  description: string;
  price: string;
}

export interface EditCylinderModalProps {
  isOpen: boolean;
  data: EditCylinderDataModalProps;
  onEdit: (cylinder: EditCylinderDataModalProps) => void;
  onClose: () => void;
}
