import React from 'react';
import '../Styles/Header.css';
import Button from './Button';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Header() {
  // const [loading, setLoading] = useState(false);
  const [storedValue/* setValue */] = useLocalStorage('user', '');

  return (
    <header>
      <div>
        <Button
          btnclass="link-button"
          name="Produtos"
          testId="customer_products__element-navbar-link-products"
        />
        <Button
          btnclass="link-button"
          name="Meus Pedidos"
          testId="customer_products__element-navbar-link-orders"
        />
      </div>
      <div>
        <Button
          btnclass="link-button"
          name={ storedValue }
          testId="customer_products__element-navbar-user-full-name"
        />
        <Button
          btnclass="link-button"
          name="Sair"
          testId="customer_products__element-navbar-link-logout"
        />
      </div>
    </header>
  );
}
