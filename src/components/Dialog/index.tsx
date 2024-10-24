import { memo } from 'react';

import { DialogProps } from '../../@types';
import { Button, Icon, Modal, Text } from '..';

function Dialog(props: DialogProps) {
  const { isOpen, advertise, isLoading = false, onAccept, onClose } = props;

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose || onAccept}>
      <div className='relative flex flex-col w-11/12 md:w-128 h-auto min-h-full md:min-h-64 overflow-hidden justify-center items-center p-8 gap-5 rounded-2xl bg-content border border-secondary'>
        <button
          type='button'
          className='absolute flex top-3 right-3 justify-center items-center size-8 bg-primary rounded-full cursor-pointer shadow-default disabled:bg-primary50 disabled:hover:opacity-100 disabled:shadow-none disabled:cursor-not-allowed hover:opacity-90 transition-colors duration-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-secondary focus-visible:border-secondary'
          disabled={isLoading}
          onClick={onClose}
        >
          <Icon
            variant='x'
            size='small'
            color={isLoading ? 'secondary70' : 'secondary'}
          />
        </button>

        <Text size='alternative' weight='semibold' className='text-center'>
          Tem certeza?
        </Text>

        <Text weight='medium' className='text-center'>
          {advertise}
        </Text>

        <div className='flex flex-row w-full mt-3 gap-4 justify-center items-center'>
          <Button
            variant='secondary'
            title='Não'
            isDisabled={isLoading}
            isHugWidth
            onClick={onClose}
          />

          <Button
            title='Sim'
            isDisabled={isLoading}
            isLoading={isLoading}
            isHugWidth
            onClick={onAccept}
          />
        </div>
      </div>
    </Modal>
  );
}

export default memo(Dialog);
