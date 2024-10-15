export type InputType =
  | 'email'
  | 'password'
  | 'tel'
  | 'text'
  | 'document'
  | 'currency'
  | 'weight';

export interface InputProps {
  value?: string;

  /**
   * @property type
   * @type {InputType | undefined}
   *
   * @description If `type` is `document` the placeholder property doesn't need
   * to be specified.
   *
   * @default "text"
   */
  type?: InputType;

  /**
   * @property placeholder
   * @type {string | undefined}
   *
   * @description If `type` input is `document` the placeholder doesn't need to
   * be specified.
   *
   * @default undefined
   */
  placeholder?: string;
  isDisabled?: boolean;
  isRequired?: boolean;
  isHugWidth?: boolean;
  onChangeText?: (text: string) => void;
}
