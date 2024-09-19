import {
  ArrowsCounterClockwise,
  Eye,
  EyeSlash,
  Pencil,
  Trash,
} from '@phosphor-icons/react';
import { memo } from 'react';

import { IconProps, IconSize, IconVariant } from '@/@types';
import { COLORS_PALETTE } from '@/config';

function Icon(props: IconProps) {
  const { variant, color = 'secondary', size = 'default' } = props;

  const iconColor = COLORS_PALETTE[color];

  const iconSizes: Record<IconSize, number> = {
    default: 24,
  };

  const icons: Record<IconVariant, React.JSX.Element> = {
    'arrows-counter-clockwise': (
      <ArrowsCounterClockwise color={iconColor} size={iconSizes[size]} />
    ),
    'eye-slash': <EyeSlash color={iconColor} size={iconSizes[size]} />,
    eye: <Eye color={iconColor} size={iconSizes[size]} />,
    pencil: <Pencil color={iconColor} size={iconSizes[size]} />,
    trash: <Trash color={iconColor} size={iconSizes[size]} />,
  };

  return icons[variant];
}

export default memo(Icon);
