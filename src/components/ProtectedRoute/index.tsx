import { memo } from 'react';
import { Navigate } from 'react-router-dom';

import { ProtectedRouteProps } from '@/@types';
import { useAuth } from '@/hooks';

function ProtectedRoute(props: ProtectedRouteProps) {
  const { children, variant = 'private' } = props;

  const { isAuthenticated } = useAuth();

  if (variant === 'private' && !isAuthenticated)
    return <Navigate to='/login' replace />;

  if (variant === 'public' && isAuthenticated)
    return <Navigate to='/dashboard' replace />;

  return children;
}

export default memo(ProtectedRoute);
