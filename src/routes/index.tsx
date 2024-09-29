import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { ProtectedRoute } from '@/components';
import { useAuth } from '@/hooks';
import { Dashboard, Login, NotFound, RegisterClient } from '@/pages';

export function Router() {
  const { isAuthenticated } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Navigate to={isAuthenticated ? '/dashboard' : '/login'} />}
          errorElement={<NotFound />}
          ErrorBoundary={NotFound}
        />
        <Route
          path='/login'
          element={
            <ProtectedRoute variant='public'>
              <Login />
            </ProtectedRoute>
          }
          errorElement={<NotFound />}
          ErrorBoundary={NotFound}
        />
        <Route
          path='/dashboard'
          element={
            <ProtectedRoute variant='private'>
              <Dashboard />
            </ProtectedRoute>
          }
          errorElement={<NotFound />}
          ErrorBoundary={NotFound}
        />
        <Route
          path='/register/client'
          element={
            <ProtectedRoute variant='private'>
              <RegisterClient />
            </ProtectedRoute>
          }
          errorElement={<NotFound />}
          ErrorBoundary={NotFound}
        />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
