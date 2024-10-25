import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { memo } from 'react';

import {
  HistoricCardProps,
  HistoricPaymentType,
  IconVariant,
  SignalStatusVariant,
} from '@/@types';
import { formatCurrency } from '@/helpers';

import { Button, Chip, Icon, SignalStatus, Text } from '../index';

function HistoricCard(props: HistoricCardProps) {
  const { id, type, client, createdAt, isDisabled = false, status } = props; // Include status in props

  const opacity = isDisabled ? 'opacity-80' : 'opacity-100';
  const isPixPayment = client.cylinder.paymentType === 'pix';
  const exchangeLabel = client.cylinder.exchange
    ? `(Troco para ${formatCurrency(client.cylinder.exchange)})`
    : '';

  // Validate if the type is a valid SignalStatusVariant
  const isValidSignalStatus = (type: string): type is SignalStatusVariant => {
    return ['collection', 'replenishment', 'request'].includes(type);
  };

  const formattedHistoricDate = format(createdAt, "dd/MM/yy 'às' H'h'm'm'", {
    locale: ptBR,
  });

  const icons: Record<HistoricPaymentType, IconVariant> = {
    money: 'money',
    pix: 'pix-logo',
  };

  function onRefuel(): void {
    console.log(id);
  }

  // Map the status to button label
  const statusButtonMap: Record<SignalStatusVariant, string> = {
    collection: 'Coletar',
    replenishment: 'Reabastecer',
    request: 'Solicitar',
  };

  return (
    <div
      aria-disabled={isDisabled}
      className={`flex w-full h-auto min-h-32 items-center px-10 py-4 gap-7 rounded-2xl bg-content border border-secondary ${opacity}`}
    >
      <div className='flex flex-1 flex-col h-full justify-center gap-2'>
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

          {client.cylinder.paymentType && (
            <div className='flex items-center gap-1'>
              <Icon
                variant={icons[client.cylinder.paymentType]}
                size='small'
                color='secondary70'
              />
              <Text size='small' weight='semibold' color='secondary70'>
                {isPixPayment ? 'PIX' : `Dinheiro ${exchangeLabel}`}
              </Text>
            </div>
          )}
        </div>

        <div className='flex justify-between items-center'>
          <div className='flex items-center gap-1'>
            <Icon variant='map-pin-simple' size='small' />
            <Text weight='medium'>{client.address}</Text>
          </div>

          <div className='flex items-center gap-1'>
            <Icon size='small' variant='calendar-dots' />
            <Text weight='medium'>{formattedHistoricDate}</Text>
          </div>
        </div>
      </div>

      <div className='flex flex-col h-auto items-center gap-5 w-48'>
        {isValidSignalStatus(type) && (
          <div className='flex items-center gap-2'>
            <Icon
              variant={
                type === 'collection'
                  ? 'arrows-counter-clockwise'
                  : type === 'replenishment'
                    ? 'plus'
                    : 'at'
              }
              size='small'
            />
            <SignalStatus variant={type} />
          </div>
        )}

        <Button
          title={statusButtonMap[status]}
          variant='secondary'
          isDisabled={isDisabled}
          isHugWidth
          onClick={onRefuel}
        />
      </div>
    </div>
  );
}

export default memo(HistoricCard);
