import { memo, useMemo } from 'react';

import { TabButtonProps, TabButtonVariant } from '@/@types';

import { Text } from '..';

function TabButton(props: TabButtonProps) {
  const { variant, isBadged = false, isSelected = false, onClick } = props;

  const focusVisibleColor = isSelected
    ? 'focus-visible:ring-primary'
    : 'focus-visible:ring-secondary';
  const borderColor = isSelected ? 'border-primary' : 'border-secondary';

  const tabTitles: Record<TabButtonVariant, string> = {
    clients: 'Meus Clientes',
    cylinders: 'Meus Botijões',
    historic: 'Histórico',
    requests: 'Solicitações',
  };

  const renderBadge = useMemo(
    () =>
      isBadged && !isSelected ? (
        <span className='z-50 absolute -top-1.5 -right-1.5 size-3 bg-primary rounded-full shadow-default' />
      ) : null,
    [isBadged, isSelected],
  );

  return (
    <button
      className={`relative flex size-full justify-center items-center px-4 bg-content border ${borderColor} rounded cursor-pointer hover:opacity-90 transition-colors duration-300 focus-visible:outline-none focus-visible:ring ${focusVisibleColor}`}
      title={tabTitles[variant]}
      onClick={onClick}
    >
      {renderBadge}

      <Text weight='semibold'>{tabTitles[variant]}</Text>
    </button>
  );
}

export default memo(TabButton);
