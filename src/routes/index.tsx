import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Login } from '../pages';
import { CadastroCliente } from '../pages/public/Clients of Resaler/index';
import { NotFound } from '../pages/public/Not Found/index';

export function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cadastro' element={<CadastroCliente />} />
        <Route path='/notfound' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
