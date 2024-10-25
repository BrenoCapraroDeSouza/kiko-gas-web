import { FormEvent, memo, useState } from 'react';

import { EditCylinderDataModalProps, EditCylinderModalProps } from '@/@types';

import { Button, CloseModalButton, Input, Modal, Text } from '..';

function EditCylinderModal(props: EditCylinderModalProps) {
  const { isOpen, data, onClose, onEdit } = props;

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [cylinder, setCylinder] = useState<EditCylinderDataModalProps>(data);

  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();

    setIsLoading(true);

    onEdit(cylinder);
    onClose();

    setIsLoading(false);
  }

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose}>
      <form
        onSubmit={onSubmit}
        className='relative flex flex-col w-11/12 md:w-144 h-auto overflow-hidden justify-center items-center p-8 gap-5 rounded-2xl bg-content border border-secondary'
      >
        <CloseModalButton onClose={onClose} isLoading={isLoading} />

        <Text size='alternative' weight='semibold' className='text-center'>
          Botijão {data.name}
        </Text>

        <Text weight='medium' className='text-center'>
          Ao editar o preço do botijão, somente novos clientes serão afetados.
        </Text>

        <Input
          value={cylinder.name}
          placeholder='Nome'
          isDisabled={isLoading}
          isHugWidth
          isRequired
          onChangeText={name => setCylinder({ ...cylinder, name })}
        />

        <Input
          value={cylinder.description}
          placeholder='Descrição'
          isDisabled={isLoading}
          isHugWidth
          isRequired
          onChangeText={description =>
            setCylinder({ ...cylinder, description })
          }
        />

        <Input
          value={cylinder.price}
          type='currency'
          placeholder='Preço'
          isDisabled={isLoading}
          isHugWidth
          isRequired
          onChangeText={price => setCylinder({ ...cylinder, price })}
        />

        <Button
          title='Editar'
          type='submit'
          isDisabled={isLoading}
          isLoading={isLoading}
          isHugWidth
        />
      </form>
    </Modal>
  );
}

export default memo(EditCylinderModal);
