import { memo } from 'react';

import { Text } from '..';

interface ToastProps {
  title: string;
  message: string;
}

function Toast(props: ToastProps) {
  const { message, title } = props;

  return (
    <div className='flex flex-col gap-1'>
      <Text size='body' weight='medium'>
        {title}
      </Text>

      <Text size='small' weight='regular'>
        {message}
      </Text>
    </div>
  );
}

export default memo(Toast);
