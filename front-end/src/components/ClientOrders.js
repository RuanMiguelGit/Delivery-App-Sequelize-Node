import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestUser } from '../services/apiRequest';
import { getUserEmail } from '../services/localStorage';
import Loading from './Loading';

export default function ClientOrders() {
  const [userSales, setUserSales] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const email = getUserEmail();
    setLoading(true);
    requestUser('http://localhost:3001/customer/orders', email)
      .then((data) => {
        setUserSales(data.data);
      });
    setLoading(false);
  }, []);
  if (loading === true) {
    return (
      <Loading />
    );
  }
  return (
    <div>
      {
        userSales.map((obj, index) => (
          <div
            /* https://pt.stackoverflow.com/questions/51391/pra-que-serve-o-atributo-role */
            /* https://developer.mozilla.org/pt-BR/docs/Web/HTML/Global_attributes/tabindex */
            type="button"
            onClick={ () => history.push(`/customer/orders/${obj.id}`) }
            role="button"
            tabIndex="0"
            onKeyDown={ () => history.push(`/customer/orders/${obj.id}`) }
            key={ index }
            style={ { backgroundColor: 'white', width: '50%' } }
          >
            <p data-testid={ `customer_orders__element-order-id-${obj.id}` }>
              {`Pedido ${index + 1}`}
            </p>
            <p data-testid={ `customer_orders__element-delivery-status-${obj.id}` }>
              {`Status: ${obj.status}`}
            </p>
            <p data-testid={ `customer_products__element-order-date-${obj.id}` }>
              {obj.saleDate}
            </p>
            <p
              data-testid={ `customer_orders__element-card-price-${obj.id}` }
            >
              { `R$ ${obj.totalPrice.replace('.', ',')} ` }
            </p>
          </div>
        ))
      }
    </div>
  );
}
