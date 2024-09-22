import {
  ArrowsCounterClockwise,
  At,
  Cylinder,
  Eye,
  EyeSlash,
  IconProps as PhosphorIconProps,
  Info,
  Pencil,
  Phone,
  Plus,
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

  const iconSizes: Record<IconSize, number> = {
    small: 16,
    default: 24,
    large: 32,
    giant: 64,
  };

  const commonIconProps: PhosphorIconProps = {
    color: COLORS_PALETTE[color],
    size: iconSizes[size],
  };

  const icons: Record<IconVariant, React.JSX.Element> = {
    'arrows-counter-clockwise': <ArrowsCounterClockwise {...commonIconProps} />,
    'eye-slash': <EyeSlash {...commonIconProps} />,
    eye: <Eye {...commonIconProps} />,
    pencil: <Pencil {...commonIconProps} />,
    trash: <Trash {...commonIconProps} />,
    'sing-out': <SignOut {...commonIconProps} />,
    'user-plus': <UserPlus {...commonIconProps} />,
    at: <At {...commonIconProps} />,
    info: <Info {...commonIconProps} />,
    phone: <Phone {...commonIconProps} />,
    tray: <Tray {...commonIconProps} />,
    user: <User {...commonIconProps} />,
    x: <X {...commonIconProps} />,
    cylinder: <Cylinder {...commonIconProps} />,
    plus: <Plus {...commonIconProps} />,
  };

  return icons[variant];
}

export default memo(Icon);
