export type DashboardTabType =
  | 'clients'
  | 'cylinders'
  | 'historic'
  | 'requests';

export interface DashboardContextProps {
  username: string;
  currentTab: DashboardTabType;
  changeToNextTab(tab: DashboardTabType): void;
}
