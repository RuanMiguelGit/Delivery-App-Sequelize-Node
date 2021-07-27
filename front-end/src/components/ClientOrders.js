import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getData } from '../services/apiRequest';
import Loading from './Loading';

export default function ClientOrders() {
  const [userSales, setUserSales] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  useEffect(() => {
    setLoading(true);
    getData('http://localhost:3001/customer/orders')
      .then((data) => {
        console.log(`cheguei aqui ${data}`);
        setUserSales(data);
      });
    setLoading(false);
  }, []);
  if (loading === false) {
    return (
      <Loading />
    );
  }
  return (
    <div>
      {userSales.map((obj, index) => (
        <div
          /* https://pt.stackoverflow.com/questions/51391/pra-que-serve-o-atributo-role */
          /* https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/tabindex */
          type="button"
          onClick={ () => history.push(`/orders/${obj.id}`) }
          role="button"
          tabIndex="0"
          onKeyDown={ () => history.push(`/orders/${obj.id}`) }
          key={ index }
        >
          <p data-testid={ `customer_orders__element-order-id-${obj.id}` }>
            {`Pedido ${index}`}
          </p>
          <p data-testid={ `customer_orders__element-delivery-status-${obj.id}` }>
            {`Status: ${obj.status}`}
          </p>
          <table>
            <tr>
              <td
                data-testid={ `customer_products__element-order-date-${obj.id}` }
              >
                {obj.sale_date}
              </td>
              <td data-testid={ `customer_orders__element-card-price-${obj.id}` }>
                { `R$ ${obj.total_price.replace('.', ',')} ` }
              </td>
            </tr>
          </table>
        </div>
      ))}
    </div>
  );
}
