import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import appContext from '../context/appContext';
import Button from './Button';

import '../Styles/CardProduct.css';

export default function CardProduct({ item }) {
  const { id, name, price, urlImage } = item;
  const priceBr = price.replace('.', ',');

  const { cart, setCart } = useContext(appContext);
  const [quantity, setQuantity] = useState(0);

  const number = 25.65;
  console.log(number.toLocaleString('pt-BR'));

  const updateCart = () => {
    // condição para garantir que o carrinho esteja limpo dos produtos com quantidade 0
    if (quantity === 0) {
      const clearCart = { ...cart };
      delete clearCart[name];
      setCart(clearCart);
      return;
    }
    // Se a quantidade não for 0, cria ou re-cria objeto cart com as propriedade "quantity" e "subTotal"
    const newItem = {
      ...cart,
      [name]: { ...item, quantity, subTotal: (quantity * price).toFixed(2) },
    };
    setCart(newItem);
  };

  useEffect(() => {
    updateCart();
  }, [quantity, updateCart]);

  const updateQuantity = ({ target }) => {
    if (target.innerText === '+') return setQuantity(quantity + 1);
    if (target.innerText === '-' && quantity > 0) setQuantity(quantity - 1);
  };

  return (
    <li>
      <p data-testid={ `customer_products__element-card-price-${id}` }>{priceBr}</p>
      <img
        className="img-card-product"
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ urlImage.split('/').pop() }
      />
      <p data-testid={ `customer_products__element-card-title-${id}` }>{name}</p>
      <Button
        testId={ `customer_products__button-card-rm-item-${id}` }
        name="-"
        btnclass="qty-button"
        onClick={ updateQuantity }
      />
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        type="number"
        value={ quantity }
        onClick={ () => setQuantity('') }
        onChange={ ({ target }) => setQuantity(target.value) }
      />
      <Button
        testId={ `customer_products__button-card-add-item-${id}` }
        name="+"
        btnclass="qty-button"
        onClick={ updateQuantity }
      />
    </li>
  );
}

CardProduct.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }).isRequired,
};
