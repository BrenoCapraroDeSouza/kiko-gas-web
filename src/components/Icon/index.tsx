import {
  ArrowsCounterClockwise,
  At,
  Eye,
  EyeSlash,
  Info,
  Pencil,
  Phone,
  SignOut,
  Trash,
  Tray,
  User,
  UserPlus,
  X,
} from '@phosphor-icons/react';
import { memo } from 'react';

import { IconProps, IconSize, IconVariant } from '@/@types';
import { COLORS_PALETTE } from '@/config';

function Icon(props: IconProps) {
  const { variant, color = 'secondary', size = 'default' } = props;

  const iconColor = COLORS_PALETTE[color];

  const iconSizes: Record<IconSize, number> = {
    small: 16,
    default: 24,
    large: 32,
    giant: 64,
  };

  const icons: Record<IconVariant, React.JSX.Element> = {
    'arrows-counter-clockwise': (
      <ArrowsCounterClockwise color={iconColor} size={iconSizes[size]} />
    ),
    'eye-slash': <EyeSlash color={iconColor} size={iconSizes[size]} />,
    eye: <Eye color={iconColor} size={iconSizes[size]} />,
    pencil: <Pencil color={iconColor} size={iconSizes[size]} />,
    trash: <Trash color={iconColor} size={iconSizes[size]} />,
    'sing-out': <SignOut color={iconColor} size={iconSizes[size]} />,
    'user-plus': <UserPlus color={iconColor} size={iconSizes[size]} />,
    at: <At color={iconColor} size={iconSizes[size]} />,
    info: <Info color={iconColor} size={iconSizes[size]} />,
    phone: <Phone color={iconColor} size={iconSizes[size]} />,
    tray: <Tray color={iconColor} size={iconSizes[size]} />,
    user: <User color={iconColor} size={iconSizes[size]} />,
    x: <X color={iconColor} size={iconSizes[size]} />,
  };

  return icons[variant];
}

export default memo(Icon);
