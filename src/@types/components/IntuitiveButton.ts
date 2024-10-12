export type IntuitiveButtonVariant = 'info' | 'delete' | 'edit';

export interface IntuitiveButtonProps {
  variant: IntuitiveButtonVariant;
  isDisabled?: boolean;
  onClick?: () => void;
}
