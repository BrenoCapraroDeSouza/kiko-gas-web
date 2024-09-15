export type ButtonType = 'button' | 'submit';

export interface ButtonProps {
  title: string;
  type?: ButtonType;
  isDisabled?: boolean;
  isHugWidth?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
}
