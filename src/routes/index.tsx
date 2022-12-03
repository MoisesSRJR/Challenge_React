import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { CartPage, Home, Success } from '../pages';
import { Providers } from './providers';

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Providers>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/cart/success' element={<Success />} />
        </Routes>
      </Providers>
    </BrowserRouter>
  );
}
