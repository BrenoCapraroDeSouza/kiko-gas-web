export type IntuitiveButtonVariant = 'info' | 'delete' | 'edit';

export interface IntuitiveButtonProps {
  variant: IntuitiveButtonVariant;
  title?: string;
  isDisabled?: boolean;
  onClick?: () => void;
}
