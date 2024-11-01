export interface AuthContextProps {
  isAuthenticated: boolean;
  changeToLogged(): void;
  handleLogout(): void;
}
