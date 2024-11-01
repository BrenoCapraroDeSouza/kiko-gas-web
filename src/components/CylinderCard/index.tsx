import { memo } from 'react';

import { CylinderCardProps } from '@/@types';
import { useDialog } from '@/hooks';

import { Icon, IntuitiveButton, Text } from '..';

function CylinderCard(props: CylinderCardProps) {
  const {
    id,
    cylinderName,
    cylinderDescription,
    price,
    isDisabled = false,
  } = props;

  const { handleOpen } = useDialog();

  const opacity = isDisabled ? 'opacity-80' : 'opacity-100';

  function onEdit(): void {}

  function onDelete(): void {
    handleOpen({ id, name: cylinderName, variant: 'cylinder' });
  }

  return (
    <div
      aria-disabled={isDisabled}
      className={`flex w-full h-auto min-h-32 justify-between items-center px-10 py-4 gap-7 rounded-2xl bg-content border border-secondary ${opacity}`}
    >
      <div className='flex flex-col h-full justify-center gap-2'>
        <div className='flex items-center gap-1'>
          <Icon variant='cylinder' size='small' />

          <Text size='alternative' weight='semibold'>
            {cylinderName} - {cylinderDescription}
          </Text>
        </div>

        <div className='flex items-center gap-1'>
          <Text weight='semibold' color='primary'>
            {price}
          </Text>

          <Text weight='medium' color='secondary70'>
            (Preço Padrão)
          </Text>
        </div>
      </div>

      <div className='flex h-full items-center gap-7'>
        <IntuitiveButton
          variant='edit'
          isDisabled={isDisabled}
          onClick={onEdit}
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

export default memo(CylinderCard);
