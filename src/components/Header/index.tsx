import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { memo } from 'react';

import { HeaderProps } from '@/@types';
import { Storage } from '@/helpers';
import { useAuth } from '@/hooks';

import { Icon, Text } from '..';

function Header(props: HeaderProps) {
  const { actions } = props;

  const { handleLogout } = useAuth();

  const resellerName = Storage.getItem('name');
  const formattedCurrentDate = format(new Date(), "EEEE, dd 'de' MMMM", {
    locale: ptBR,
  });

  return (
    <header className='flex flex-col w-full h-64 p-10 pt-8 bg-content border-b border-b-secondary'>
      <div className='flex w-full justify-between items-start gap-10'>
        <button
          className='flex items-center gap-1 rounded hover:opacity-90 transition-colors duration-300 focus-visible:outline-none focus-visible:ring focus-visible:ring-secondary'
          title='Sair'
          onClick={handleLogout}
        >
          <Icon variant='sign-out' />

          <Text size='alternative' weight='semibold'>
            Sair
          </Text>
        </button>

        <div className='flex flex-col items-end gap-2'>
          <Text size='alternative' weight='semibold'>
            Olá, revendedor(a) {resellerName}
          </Text>

          <Text
            color='secondary70'
            size='small'
            className='first-letter:uppercase'
          >
            {formattedCurrentDate}
          </Text>
        </div>
      </div>

      <div className='flex w-full h-full justify-evenly items-end mt-5 gap-10'>
        {actions.map(action => (
          <div className='flex w-64 h-16 justify-center items-center'>
            {action.button}
          </div>
        ))}
      </div>
    </header>
  );
}

export default memo(Header);
