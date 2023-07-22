import { PayPalScriptProvider } from '@paypal/react-paypal-js';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import App from './App';
import store from './app/store';
import './assets/styles/bootstrap.custom.css';
import './assets/styles/index.css';
import AdminRoute from './components/AdminRoute';
import PrivateRoute from './components/PrivateRoute';
import CartPage from './pages/CartPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import OrderListPage from './pages/admin/OrderListPage';
import OrderPage from './pages/OrderPage';
import PaymentPage from './pages/PaymentPage';
import PlaceOrderPage from './pages/PlaceOrderPage';
import ProductPage from './pages/ProductPage';
import ProfilePage from './pages/ProfilePage';
import RegisterPage from './pages/RegisterPage';
import ShippingPage from './pages/ShippingPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />}>
      <Route index={true} path='/' element={<HomePage />} />
      <Route path='/product/:id' element={<ProductPage />} />
      <Route path='/cart' element={<CartPage />} />
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<RegisterPage />} />

      <Route path='' element={<PrivateRoute />}>
        <Route path='/shipping' element={<ShippingPage />} />
        <Route path='/payment' element={<PaymentPage />} />
        <Route path='/placeorder' element={<PlaceOrderPage />} />
        <Route path='/order/:id' element={<OrderPage />} />
        <Route path='/profile' element={<ProfilePage />} />
      </Route>
      <Route path='' element={<AdminRoute />}>
        <Route path='/admin/orderlist' element={<OrderListPage />} />
      </Route>
    </Route>
  )
);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PayPalScriptProvider deferLoading={true}>
        <RouterProvider router={router} />
      </PayPalScriptProvider>
    </Provider>
  </React.StrictMode>
);
