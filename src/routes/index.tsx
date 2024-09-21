import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login, RegisterClient } from '../pages';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>

      <Routes>
        <Route path='/register/client' element={<RegisterClient />} />
      </Routes>
    </BrowserRouter>
  );
}
