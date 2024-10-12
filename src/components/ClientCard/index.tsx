import { memo } from 'react';

import { ClientCardProps } from '@/@types';

import { Icon, IntuitiveButton, Text } from '..';

function ClientCard(props: ClientCardProps) {
  const { id, name, cpfcnpj, email, phone, isDisabled = false } = props;

  const opacity = isDisabled ? 'opacity-80' : 'opacity-100';

  function onInfo(): void {}

  function onDelete(): void {
    console.log(id);
  }

  return (
    <div
      aria-disabled={isDisabled}
      className={`flex w-full h-auto justify-between items-center px-10 py-4 gap-7 rounded-2xl bg-content border border-secondary ${opacity}`}
    >
      <div className='flex flex-col h-full gap-2'>
        <div className='flex items-center gap-1'>
          <Icon variant='user' size='small' />

          <Text size='alternative' weight='semibold'>
            {name} - {cpfcnpj}
          </Text>
        </div>

        <div className='flex items-center gap-1'>
          <Icon variant='at' size='small' color='secondary70' />

          <Text weight='medium' color='secondary70'>
            {email}
          </Text>
        </div>

        <div className='flex items-center gap-1'>
          <Icon variant='phone' size='small' color='secondary70' />

          <Text weight='medium' color='secondary70'>
            {phone}
          </Text>
        </div>
      </div>

      <div className='flex h-full items-center gap-7'>
        <IntuitiveButton
          variant='info'
          isDisabled={isDisabled}
          onClick={onInfo}
        />

        <IntuitiveButton
          variant='delete'
          isDisabled={isDisabled}
          onClick={onDelete}
        />
      </div>
    </div>
  );
}

export default memo(ClientCard);
