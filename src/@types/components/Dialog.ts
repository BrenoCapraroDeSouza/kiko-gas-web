export interface DialogProps {
  isOpen: boolean;
  advertise: string;
  isLoading?: boolean;
  onAccept?: () => void;
  onClose?: () => void;
}
