import { memo } from 'react';

import {
  HistoricCardProps,
  HistoricCardType,
  HistoricPaymentType,
  IconVariant,
} from '@/@types';
import { formatCurrency, formatToTraditionalDate } from '@/helpers';

import { Chip, Icon, SignalStatus, Text } from '../index';

function HistoricCard(props: HistoricCardProps) {
  const { type, client, createdAt, status } = props;

  const historicDate = formatToTraditionalDate(createdAt);
  const isPixPayment = client.cylinder.paymentType === 'PIX';
  const exchangeLabel = client.cylinder.exchange
    ? `(Troco para ${formatCurrency(client.cylinder.exchange)})`
    : '';

  const calendarIcons: Record<HistoricCardType, IconVariant> = {
    ACCEPTED: 'calendar-check',
    REFUSED: 'calendar-x',
  };

  const paymentIcons: Record<HistoricPaymentType, IconVariant> = {
    MONEY: 'money',
    PIX: 'pix-logo',
  };

  return (
    <div className='flex w-full h-auto min-h-32 items-center px-10 py-4 gap-7 rounded-2xl bg-content border border-secondary'>
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
                variant={paymentIcons[client.cylinder.paymentType]}
                size='small'
                color='secondary70'
              />

              <Text size='small' weight='semibold' color='secondary70'>
                {isPixPayment ? 'PIX' : `Dinheiro ${exchangeLabel}`}
              </Text>
            </div>
          )}
        </div>

        <div className='flex justify-between items-center gap-3'>
          <div className='flex max-w-108 items-center gap-1'>
            <Icon variant='map-pin-simple' size='small' />

            <Text weight='semibold' color='secondary70'>
              {client.address}
            </Text>
          </div>

          <div className='flex items-center gap-1'>
            <Icon size='small' variant={calendarIcons[type]} />

            <Text>{historicDate}</Text>
          </div>
        </div>
      </div>

      <div className='flex h-auto items-center w-48'>
        <SignalStatus variant={status} />
      </div>
    </div>
  );
}

export default memo(HistoricCard);
