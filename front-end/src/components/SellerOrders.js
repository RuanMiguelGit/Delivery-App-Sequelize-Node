import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { requestUser } from '../services/apiRequest';
import { getUserEmail } from '../services/localStorage';
import Loading from './Loading';

export default function SellerOrders() {
  const [userSales, setUserSales] = useState([]);
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  useEffect(() => {
    const email = getUserEmail();
    setLoading(true);
    requestUser('http://localhost:3001/orders', email)
      .then((data) => {
        setUserSales(data.data);
      });
    setLoading(false);
    console.log(`UseEffect ${userSales}`);
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
            type="button"
            onClick={ () => history.push(`/seller/orders/${obj.id}`) }
            role="button"
            tabIndex="0"
            onKeyDown={ () => history.push(`/seller/orders/${obj.id}`) }
            key={ index }
            style={ { backgroundColor: 'white', width: '50%' } }
          >
            <p data-testid={ `seller_orders__element-order-id-${obj.id}` }>
              {`Pedido ${index + 1}`}
            </p>
            <p data-testid={ `seller_orders__element-delivery-status-${obj.id}` }>
              {`Status: ${obj.status}`}
            </p>
            <p data-testid={ `seller_orders__element-order-date-${obj.id}` }>
              {new Date(obj.saleDate).toLocaleDateString('pt-BR')}
            </p>
            <p
              data-testid={ `seller_orders__element-card-price-${obj.id}` }
            >
              { `R$ ${obj.totalPrice.replace('.', ',')} ` }
            </p>
            <p data-testid={ `seller_orders__element-card-address-${obj.id}` }>
              { `${obj.deliveryAddress}, ${obj.deliveryNumber}` }
            </p>
          </div>
        ))
      }
    </div>
  );
}
