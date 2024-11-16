import { memo } from 'react';

import { DialogProps } from '../../@types';
import { Button, CloseModalButton, Modal, Text } from '..';

function Dialog(props: DialogProps) {
  const { isOpen, advertise, isLoading = false, onAccept, onClose } = props;

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose || onAccept}>
      <div className='relative flex flex-col w-11/12 md:w-128 h-auto min-h-full md:min-h-64 overflow-hidden justify-center items-center p-8 gap-5 rounded-2xl bg-content border border-secondary'>
        <CloseModalButton isLoading={isLoading} onClose={onClose} />

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
