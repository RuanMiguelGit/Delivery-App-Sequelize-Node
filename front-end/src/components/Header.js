import React from 'react';
import '../Styles/Header.css';
import Button from './Button';

export default function Header() {
  // const [loading, setLoading] = useState(false);

  return (
    <header>
      <div>
        <Button
          testId="customer_products__element-navbar-link-products"
          name="Produtos"
          btnclass="link-button"
        />
        <Button
          testId="customer_products__element-navbar-link-orders"
          name="Meus Pedidos"
          btnclass="link-button"
        />
      </div>
      <div>
        <Button
          testId="customer_products__element-navbar-user-full-name"
          name="Zé cachaça"
          btnclass="link-button"
        />
        <Button
          testId="customer_products__element-navbar-link-logout"
          name="Sair"
          btnclass="link-button"
        />
      </div>
    </header>
  );
}
