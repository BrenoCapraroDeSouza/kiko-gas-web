import { TabButtonVariant } from './TabButton';

export type HeaderActionProps = {
  key: React.Key;
  variant: TabButtonVariant;
};

export interface HeaderProps {
  actions: HeaderActionProps[];
}
