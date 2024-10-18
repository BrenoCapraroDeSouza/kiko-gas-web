import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { memo } from 'react';

import { SignalCardProps } from '@/@types';
import { formatCurrency } from '@/helpers';

import { Button, Chip, Icon, Text } from '..';

function SignalCard(props: SignalCardProps) {
  const { id, type, client, isDisabled = false, createdAt } = props;

  const opacity = isDisabled ? 'opacity-80' : 'opacity-100';

  function onRecuse(): void {
    console.log('Transação ' + id + ' do tipo ' + type + ' recusada');
  }

  function onAccept(): void {
    console.log('Transação ' + id + ' do tipo ' + type + ' aceita');
  }

  const formattedCurrentDate = format(createdAt, " dd/MM/yy 'às' H'h'm'm'", {
    locale: ptBR,
  });

  return (
    <div
      aria-disabled={isDisabled}
      className={`flex w-full h-auto min-h-32  items-center px-10 py-4 gap-7 rounded-2xl bg-content border border-secondary ${opacity}`}
    >
      <div className='flex flex-col flex-1 h-full justify-center gap-2'>
        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-1'>
            <Icon variant='user' size='small' />

            <Text size='alternative' weight='semibold'>
              {client.name} - {client.cpfcnpj}
            </Text>
          </div>

          <Chip variant={type} />
        </div>

        <div className='flex items-center gap-3'>
          <div className='flex items-center gap-1'>
            <Icon variant='cylinder' size='small' />

            <Text size='alternative' weight='semibold'>
              {client.cylinder.name} - {client.cylinder.description} -
            </Text>

            <Text size='alternative' weight='semibold' color='primary'>
              {formatCurrency(client.cylinder.price)}
            </Text>
          </div>

          <div className='flex items-center gap-1'>
            <Icon
              variant={
                client.cylinder.paymentType === 'pix' ? 'pix-logo' : 'money'
              }
              size='small'
              color='secondary70'
            />

            <Text size='small' weight='semibold' color='secondary70'>
              {client.cylinder.paymentType === 'pix'
                ? 'PIX'
                : `Dinheiro  ${
                    client.cylinder.exchange
                      ? `(Troco para ${formatCurrency(client.cylinder.exchange)}}`
                      : ''
                  }`}
            </Text>
          </div>
        </div>

        <div className='flex items-center gap-1'>
          <Icon variant='map-pin-simple' size='small' />

          <Text weight='medium'>{client.address}</Text>
        </div>

        <div className='flex justify-between items-center gap-2'>
          <div className='flex items-center gap-1'>
            <Icon variant='phone' size='small' />

            <Text weight='medium'>{client.phone}</Text>
          </div>

          <div className='flex justify-between items-center gap-1'>
            <Icon size='small' variant='calendar-dots' />

            <Text weight='medium'>Solicitado em {formattedCurrentDate}</Text>
          </div>
        </div>
      </div>

      <div className='flex flex-col h-auto items-center gap-5 w-48'>
        <Button
          title='Recusar'
          variant='secondary'
          isDisabled={isDisabled}
          onClick={onRecuse}
          isHugWidth
        />

        <Button
          title='Aceitar'
          isDisabled={isDisabled}
          onClick={onAccept}
          isHugWidth
        />
      </div>
    </div>
  );
}

export default memo(SignalCard);
