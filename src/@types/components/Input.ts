export type InputType = 'email' | 'password' | 'tel' | 'text' | 'document';

export interface InputProps {
  value?: string;
  type?: InputType;
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isHugWidth?: boolean;
  onChangeText?: (text: string) => void;
}
