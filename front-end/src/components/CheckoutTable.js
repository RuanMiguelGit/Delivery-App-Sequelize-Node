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
            .map((item, index) => (
              <tr key={ item.id }>
                <td
                  data-testid={ `customer_checkout__element-order-table-item-number-${index }` }
                  className="tableId"
                >
                  {index + 1 }
                </td>
                <td
                  data-testid={ `customer_checkout__element-order-table-name-${index }` }
                  className="tableDesc"
                >
                  {item.name}
                </td>
                <td
                  data-testid={ `customer_checkout__element-order-table-quantity-${index }` }
                  className="tableQua"
                >
                  {item.quantity}
                </td>
                <td
                  data-testid={ `customer_checkout__element-order-table-unit-price-${index }` }
                  className="tableVal"
                >
                  {item.price.replace(/\./g,',')}
                </td>
                <td
                  data-testid={ `customer_checkout__element-order-table-sub-total-${index }` }
                  className="tableTotal"
                >
                  {item.subTotal.replace(/\./g,',')}
                </td>
                <td>
                  <button
                    type="submit"
                    data-testid={ `customer_checkout__element-order-table-remove-${index }` }
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
