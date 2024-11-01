export type DialogVariant = 'client' | 'cylinder';

export interface DialogInfoProps {
  id: string;
  name: string;
  variant: DialogVariant;
}

export interface DialogContextProps {
  handleOpen: (info: DialogInfoProps) => void;
}
