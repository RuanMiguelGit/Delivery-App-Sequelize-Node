/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

const CheckoutTable = ({ cart, loading, setCart }) => {
  const removeItem = (id) => setCart(Object.values(cart)
    .filter((item) => item.id !== id));

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Item</th>
            <th>Descrição</th>
            <th>Quantidade</th>
            <th>Valor Unitário</th>
            <th>Sub-Total</th>
            <th>Remover Item</th>
          </tr>
        </thead>
        <tbody>
          {loading ? 'Carregando' : Object.values(cart)
            .map((item, i) => (
              <tr key={ item.id }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${i}`
                  }
                  className="tableId"
                >
                  {i + 1 }
                </td>
                <td
                  data-testid={ `customer_checkout__element-order-table-name-${i}` }
                  className="tableDesc"
                >
                  {item.name}
                </td>
                <td
                  data-testid={ `customer_checkout__element-order-table-quantity-${i}` }
                  className="tableQua"
                >
                  {item.quantity}
                </td>
                <td
                  data-testid={ `customer_checkout__element-order-table-unit-price-${i}` }
                  className="tableVal"
                >
                  {item.price.replace(/\./g, ',')}
                </td>
                <td
                  data-testid={ `customer_checkout__element-order-table-sub-total-${i}` }
                  className="tableTotal"
                >
                  {item.subTotal.replace(/\./g, ',')}
                </td>
                <td>
                  <button
                    type="submit"
                    data-testid={
                      `customer_checkout__element-order-table-remove-${i}`
                    }
                    onClick={ () => removeItem(item.id) }
                    className="tableButton"
                    name="Remover"
                  >
                    {' '}
                    Remover
                    {' '}
                  </button>
                  {' '}
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

CheckoutTable.propTypes = {
  cart: PropTypes.string.isRequired,
  loading: PropTypes.string.isRequired,
  setCart: PropTypes.string.isRequired,
};

export default CheckoutTable;
