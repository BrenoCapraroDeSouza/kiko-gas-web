import { memo } from 'react';

import { CylindersModalProps } from '@/@types';
import { formatCurrency } from '@/helpers';

import { CloseModalButton, Icon, Modal, Text } from '..';

function CylindersModal(props: CylindersModalProps) {
  const { advertise, isOpen, cylinders, onClose } = props;

  const hasCylinders = cylinders.length > 0;

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <div className='relative flex flex-col w-11/12 md:w-144 h-auto md:max-h-121 md:min-h-48 overflow-hidden justify-center items-center p-8 gap-5 rounded-2xl bg-content border border-secondary'>
        <CloseModalButton onClose={onClose} />

        <Text size='alternative' weight='semibold' className='text-center'>
          Valores dos Botijões
        </Text>

        {hasCylinders && (
          <Text weight='medium' className='text-center'>
            {advertise}
          </Text>
        )}

        <div className='flex flex-col w-full h-auto max-h-75 justify-center items-center overflow-y-auto gap-5 scrollbar scrollbar-w-2 scrollbar-thumb-secondary70 scrollbar-track-white-color'>
          {hasCylinders ? (
            cylinders.map(cylinder => (
              <div
                key={cylinder.id}
                className='flex w-full justify-between items-center p-4 gap-4 bg-content rounded border border-secondary'
              >
                <Text weight='semibold'>
                  {cylinder.name} - {cylinder.description}
                </Text>

                <Text weight='semibold' color='primary'>
                  {formatCurrency(cylinder.price)}
                </Text>
              </div>
            ))
          ) : (
            <div className='flex flex-col justify-center items-center gap-2'>
              <Icon variant='tray' size='large' />

              <Text weight='medium' className='text-center'>
                No momento não foi possível buscar os bojitões do seu cliente,
                que tal tentar outra hora?
              </Text>
            </div>
          )}
        </div>
      </div>
    </Modal>
  );
}

export default memo(CylindersModal);
