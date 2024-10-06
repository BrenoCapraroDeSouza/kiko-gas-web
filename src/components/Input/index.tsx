import { ChangeEvent, memo, useEffect, useState } from 'react';
import { NumericFormat, PatternFormat } from 'react-number-format';

import { InputProps, InputType } from '@/@types';

import { Icon, Text } from '..';

function Input(props: InputProps) {
  const {
    isDisabled = false,
    isRequired = false,
    isHugWidth = false,
    value = '',
    placeholder = '',
    type = 'text',
    onChangeText,
  } = props;

  const [isCPF, setIsCPF] = useState<boolean>(true);
  const [isVisibleText, setIsVisibleText] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(value);

  function handleVisibilityChange(): void {
    setIsVisibleText(!isVisibleText);
  }

  function handleDocumentChange(): void {
    setIsCPF(!isCPF);
  }

  function handleChangeText(text: string): void {
    setInputValue(text);

    if (onChangeText) onChangeText(text);
  }

  const isDocument = type === 'document';
  const isPassword = type === 'password';
  const width = isHugWidth ? 'w-full' : 'w-auto';
  const paddingRight = isDocument || isPassword ? 'pr-4' : 'pr-0';
  const cursor = isDisabled ? 'cursor-not-allowed' : 'cursor-pointer';

  const commonInputProps = {
    value: inputValue,
    placeholder: isDocument ? (isCPF ? 'CPF' : 'CNPJ') : placeholder,
    className: `w-full h-full ${paddingRight} bg-transparent font-poppins font-medium text-base ${cursor} outline-none placeholder:text-secondary70 disabled:text-secondary70`,
    disabled: isDisabled,
    required: isRequired,
    onChange: (event: ChangeEvent<HTMLInputElement>) =>
      handleChangeText(event.target.value),
  };

  const defaultInput: React.JSX.Element = (
    <input type={isVisibleText ? 'text' : type} {...commonInputProps} />
  );

  const inputs: Record<InputType, React.JSX.Element> = {
    email: defaultInput,
    password: defaultInput,
    text: defaultInput,
    document: (
      <PatternFormat
        type='tel'
        mask='_'
        format={isCPF ? '###.###.###-##' : '##.###.###/####-##'}
        {...commonInputProps}
      />
    ),
    tel: (
      <PatternFormat
        type='tel'
        mask='_'
        format='(##) # ####-####'
        {...commonInputProps}
      />
    ),
    currency: (
      <NumericFormat
        thousandsGroupStyle='thousand'
        thousandSeparator='.'
        prefix='R$ '
        decimalSeparator=','
        decimalScale={2}
        allowLeadingZeros
        allowNegative={false}
        maxLength={11}
        minLength={0}
        max={9999}
        min={0}
        {...commonInputProps}
      />
    ),
  };

  useEffect(() => {
    setInputValue('');

    if (onChangeText) onChangeText('');
  }, [isCPF]);

  return (
    <div
      className={`flex ${width} h-15 px-4 py-2 items-center border-solid border-secondary70 border ${cursor} rounded overflow-hidden`}
    >
      {inputs[type]}

      {isPassword && (
        <button
          className={`size-6 ${cursor} hover:opacity-90 transition-colors duration-300 disabled:opacity-90 disabled:hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary focus-visible:rounded`}
          type='button'
          onClick={handleVisibilityChange}
          disabled={isDisabled}
        >
          <Icon variant={isVisibleText ? 'eye-slash' : 'eye'} />
        </button>
      )}

      {isDocument && (
        <button
          className={`flex w-auto h-6 items-center gap-1 ${cursor} hover:opacity-90 transition-colors duration-300 disabled:opacity-90 disabled:hover:opacity-90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-secondary focus-visible:rounded`}
          type='button'
          title={`Mudar tipo de documento para ${isCPF ? 'CNPJ' : 'CPF'}`}
          onClick={handleDocumentChange}
          disabled={isDisabled}
        >
          <Icon variant='arrows-counter-clockwise' />

          <Text>{isCPF ? 'CNPJ' : 'CPF'}</Text>
        </button>
      )}
    </div>
  );
}

export default memo(Input);
