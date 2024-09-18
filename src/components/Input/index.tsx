import { ChangeEvent, memo, useState } from 'react';
import { PatternFormat } from 'react-number-format';

import { InputProps, InputType } from '@/@types';

import { Icon } from '..';

function Input(props: InputProps) {
  const {
    value,
    isDisabled = false,
    isRequired = false,
    isHugWidth = false,
    placeholder = '',
    type = 'text',
    onChangeText,
  } = props;

  const [isVisibleText, setIsVisibleText] = useState<boolean>(false);

  function handleVisibilityChange(): void {
    setIsVisibleText(!isVisibleText);
  }

  function handleChangeText(text: string): void {
    if (onChangeText) onChangeText(text);
  }

  const isPassword = type === 'password';
  const width = isHugWidth ? 'w-full' : 'w-auto';
  const cursor = isDisabled ? 'cursor-not-allowed' : 'cursor-pointer';

  const commonInputProps = {
    value,
    placeholder,
    className: `w-full h-full pr-4 bg-transparent font-poppins font-medium text-base ${cursor} outline-none placeholder:text-secondary70 disabled:text-secondary70`,
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
    document: <></>,
    tel: (
      <PatternFormat
        type='tel'
        format='(##) # ####-####'
        mask='_'
        {...commonInputProps}
      />
    ),
  };

  return (
    <div
      className={`flex ${width} h-15 px-4 py-2 items-center border-solid border-secondary70 border ${cursor} rounded overflow-hidden`}
    >
      {inputs[type]}

      {isPassword && (
        <button
          className={`size-6 ${cursor} hover:opacity-90 transition-colors duration-300 disabled:opacity-90 disabled:hover:opacity-90 focus:outline-none focus:ring focus:ring-secondary`}
          type='button'
          onClick={handleVisibilityChange}
          disabled={isDisabled}
        >
          <Icon variant={isVisibleText ? 'eye-slash' : 'eye'} />
        </button>
      )}
    </div>
  );
}

export default memo(Input);
