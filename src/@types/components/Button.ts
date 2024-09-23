export type ButtonVariant = 'primary' | 'secondary';

export type ButtonType = 'button' | 'submit';

export interface ButtonProps {
  title: string;
  variant?: ButtonVariant;
  type?: ButtonType;
  isDisabled?: boolean;
  isHugWidth?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}
