/* eslint-disable */
import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import appContext from '../context/appContext';

import '../Styles/CardProduct.css';

import Button from './Button';

export default function CardProduct({ item }) {
  const { id, name, price, url_image: urlImage } = item;

  const { cart, setCart } = useContext(appContext);
  const [quantity, setQuantity] = useState(0);

  useEffect(() => {
    const newItem = {
      ...cart,
      [name]: { ...item, quantity, subTotal: (quantity * price) }
    };
    setCart(newItem);
  }, [quantity]);

  return (
    <li key={ id }>
      <p data-testid={ `customer_products__element-card-price-${id}` }>{price}</p>
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
        onClick={ () => setQuantity(quantity - 1) }
      />
      <input
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ quantity }
      />
      <Button
        testId={ `customer_products__button-card-add-item-${id}` }
        name="+"
        btnclass="qty-button"
        onClick={ () => setQuantity(quantity + 1) }
      />
    </li>
  );
}

CardProduct.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    url_image: PropTypes.string,
  }).isRequired,
};

CardProduct.propTypes = {
  item: PropTypes.object.isRequired,
};
