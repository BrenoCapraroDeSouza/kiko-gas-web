export interface DialogProps {
  isOpen: boolean;
  advertise: string;
  isLoading?: boolean;
  onClose: () => void;
  onAccept?: () => void;
}
