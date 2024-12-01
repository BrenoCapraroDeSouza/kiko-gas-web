import { FormEvent, memo, useEffect, useState } from 'react';

import { CylinderCardProps, EditCylinderCardProps } from '@/@types';
import { currencyToNumber, formatCurrency } from '@/helpers';
import { useDialog } from '@/hooks';
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

  const { handleOpen } = useDialog();

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

  function onSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
  }

  const isEditable =
    !cylinder?.name ||
    !cylinder?.description ||
    !cylinder?.price?.toString() ||
    !cylinder?.weight?.toString();

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
          <CloseModalButton onClose={onCloseModal} />

          <Text size='alternative' weight='semibold' className='text-center'>
            Botijão {name}
          </Text>

          <Text weight='medium' className='text-center'>
            Ao editar o preço do botijão, somente novos clientes serão afetados.
          </Text>

          <Input
            value={cylinder?.name}
            placeholder='Nome'
            isRequired
            isHugWidth
            onChangeText={name => setCylinder({ ...cylinder, name })}
          />

          <Input
            value={cylinder?.description}
            placeholder='Descrição'
            isRequired
            isHugWidth
            onChangeText={description =>
              setCylinder({ ...cylinder, description })
            }
          />

          <Input
            type='currency'
            value={cylinder?.price?.toString()}
            placeholder='Preço'
            isRequired
            isHugWidth
            onChangeText={price =>
              setCylinder({ ...cylinder, price: currencyToNumber(price) })
            }
          />

          <Input
            type='weight'
            value={cylinder?.weight?.toString()}
            placeholder='Peso'
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
            isDisabled={isEditable}
            isHugWidth
          />
        </form>
      </Modal>
    </>
  );
}

export default memo(CylinderCard);
