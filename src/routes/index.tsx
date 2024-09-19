import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from '../pages';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}
