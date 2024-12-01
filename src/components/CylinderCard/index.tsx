import { FormEvent, memo, useEffect, useState } from 'react';

import { CylinderCardProps, EditCylinderCardProps } from '@/@types';
import { currencyToNumber, formatCurrency } from '@/helpers';
import { useDialog, useEditCylinder, useToaster } from '@/hooks';
import { removeKgSuffix } from '@/utils';

import {
  Button,
  CloseModalButton,
  Icon,
  Input,
  IntuitiveButton,
  Modal,
  Text,
} from '..';

function CylinderCard(props: CylinderCardProps) {
  const { id, name, description, price, weight, isDisabled = false } = props;

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [cylinder, setCylinder] = useState<EditCylinderCardProps>(
    {} as EditCylinderCardProps,
  );

  const {
    isEditingCylinder,
    isEditCylinderError,
    editCylinder,
    setIsEditCylinderError,
  } = useEditCylinder();
  const { handleOpen } = useDialog();
  const [showToast] = useToaster();

  const opacity = isDisabled ? 'opacity-80' : 'opacity-100';

  function onCloseModal(): void {
    setIsOpen(false);
  }

  function onEdit(): void {
    setIsOpen(true);
  }

  function onDelete(): void {
    handleOpen({ id, name, variant: 'cylinder' });
  }

  async function onSubmit(event: FormEvent<HTMLFormElement>): Promise<void> {
    event.preventDefault();

    const editedCylinder = await editCylinder(cylinder);

    if (editedCylinder?.id) {
      showToast(
        'Editado com sucesso!',
        `O botijão de gás ${editedCylinder.name} foi editado com sucesso!`,
      );

      onCloseModal();
      setCylinder({} as EditCylinderCardProps);
    }
  }

  const isEditable =
    !cylinder?.name ||
    !cylinder?.description ||
    !cylinder?.price?.toString() ||
    !cylinder?.weight?.toString();

  useEffect(() => {
    if (isEditCylinderError) {
      setIsEditCylinderError(false);

      showToast(
        'Ops! Parece que algo não deu certo',
        'Verifique os dados e tente novamente.',
      );
    }
  }, [isEditCylinderError, setIsEditCylinderError, showToast]);

  useEffect(() => {
    setCylinder({ id, name, description, price, weight });
  }, [id, name, description, price, weight]);

  return (
    <>
      <div
        aria-disabled={isDisabled}
        className={`flex w-full h-auto min-h-32 justify-between items-center px-10 py-4 gap-7 rounded-2xl bg-content border border-secondary ${opacity}`}
      >
        <div className='flex flex-col h-full justify-center gap-2'>
          <div className='flex items-center gap-1'>
            <Icon variant='cylinder' size='small' />

            <Text size='alternative' weight='semibold'>
              {name} - {description}
            </Text>
          </div>

          <div className='flex items-center gap-1'>
            <Text weight='semibold' color='primary'>
              {formatCurrency(price)}
            </Text>

            <Text weight='medium' color='secondary70'>
              (Preço Padrão)
            </Text>
          </div>
        </div>

        <div className='flex h-full items-center gap-7'>
          <IntuitiveButton
            variant='edit'
            title='Editar botijão'
            isDisabled={isDisabled}
            onClick={onEdit}
          />

          <IntuitiveButton
            variant='delete'
            title='Deletar botijão'
            isDisabled={isDisabled}
            onClick={onDelete}
          />
        </div>
      </div>

      <Modal isOpen={isOpen} onRequestClose={onCloseModal}>
        <form
          className='relative flex flex-col w-11/12 md:w-128 h-auto overflow-hidden justify-center items-center p-8 gap-5 rounded-2xl bg-content border border-secondary'
          onSubmit={onSubmit}
        >
          <CloseModalButton
            isLoading={isEditingCylinder}
            onClose={onCloseModal}
          />

          <Text size='alternative' weight='semibold' className='text-center'>
            Botijão {name}
          </Text>

          <Text weight='medium' className='text-center'>
            Ao editar o preço do botijão, somente novos clientes serão afetados.
          </Text>

          <Input
            value={cylinder?.name || name}
            placeholder='Nome'
            isDisabled={isEditingCylinder}
            isRequired
            isHugWidth
            onChangeText={name => setCylinder({ ...cylinder, name })}
          />

          <Input
            value={cylinder?.description || description}
            placeholder='Descrição'
            isDisabled={isEditingCylinder}
            isRequired
            isHugWidth
            onChangeText={description =>
              setCylinder({ ...cylinder, description })
            }
          />

          <Input
            type='currency'
            value={formatCurrency(cylinder?.price || price)}
            placeholder='Preço'
            isDisabled={isEditingCylinder}
            isRequired
            isHugWidth
            onChangeText={price =>
              setCylinder({ ...cylinder, price: currencyToNumber(price) })
            }
          />

          <Input
            type='weight'
            value={formatCurrency(cylinder?.weight || weight)}
            placeholder='Peso'
            isDisabled={isEditingCylinder}
            isRequired
            isHugWidth
            onChangeText={weight =>
              setCylinder({
                ...cylinder,
                weight: currencyToNumber(removeKgSuffix(weight)),
              })
            }
          />

          <Button
            type='submit'
            title='Editar'
            isDisabled={isEditable || isEditingCylinder}
            isLoading={isEditingCylinder}
            isHugWidth
          />
        </form>
      </Modal>
    </>
  );
}

export default memo(CylinderCard);
