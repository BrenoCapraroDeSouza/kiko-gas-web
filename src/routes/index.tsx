import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';

import { Login, NotFound, RegisterClient } from '../pages';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Navigate to='/login' />} />
        <Route path='/login' element={<Login />} />
        <Route path='/register/client' element={<RegisterClient />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
