import { ReactNode } from 'react';

export interface ModalProps {
  children: ReactNode;
  isOpen: boolean;
  onRequestClose?: () => void;
}
