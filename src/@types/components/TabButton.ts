export type TabButtonVariant =
  | 'clients'
  | 'cylinders'
  | 'historic'
  | 'requests';

export interface TabButtonProps {
  variant: TabButtonVariant;
  isSelected?: boolean;

  /**
   * @property isBadged
   * @type {boolean | undefined}
   *
   * @description This property will be used when `variant` property is
   * `"requests"`.
   *
   * @default false
   */
  isBadged?: boolean;
  onClick?: () => void;
}
