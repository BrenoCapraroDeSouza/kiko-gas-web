import { memo } from 'react';

import { ListProps } from '@/@types';

function List(props: ListProps) {
  const { children } = props;

  return (
    <div className='flex flex-col w-full mx-auto px-64 py-10 gap-10'>
      {children}
    </div>
  );
}

export default memo(List);
