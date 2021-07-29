import React from 'react';
import { useHistory } from 'react-router-dom';

import Button from './Button';
import { getUserName, clearUserInLocalStorage } from '../services/localStorage';

import '../Styles/Header.css';

export default function Header() {
  const history = useHistory();

  const logout = () => {
    history.push('/login');
    clearUserInLocalStorage();
  };

  return (
    <header>
      <div>
        <Button
          testId="customer_products__element-navbar-link-products"
          name="Produtos"
          btnclass="link-button"
          disable={ false }
          onClick={ () => history.push('/customer/products') }
        />
        <Button
          testId="customer_products__element-navbar-link-orders"
          name="Meus Pedidos"
          btnclass="link-button"
          disable={ false }
          onClick={ () => history.push('/customer/orders') }
        />
      </div>
      <div>
        <Button
          testId="customer_products__element-navbar-user-full-name"
          name={ getUserName() }
          btnclass="link-button"
          disable={ false }
          onClick={ console.log('user') }
        />
        <Button
          testId="customer_products__element-navbar-link-logout"
          name="Sair"
          btnclass="link-button"
          disable={ false }
          onClick={ logout }
        />
      </div>
    </header>
  );
}
