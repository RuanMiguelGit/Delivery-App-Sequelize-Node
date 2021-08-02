/* eslint-disable */
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Button from './Button';
import DropDown from './DropDown';
import Input from './Input';
import '../Styles/checkout.css';
import { getData } from '../services/apiRequest';
import { getUserName, getUserToken } from '../services/localStorage';
import appContext from '../context/appContext';
import CheckoutTable from './CheckoutTable';

export default function Checkout() {
  const [loading, setloading] = useState(false);
  const [sellers, setSellers] = useState([]);
  const [address, setaddress] = useState('');
  const [number, setnumber] = useState('');
  const [quantity, setQuantity] = useState([]);
  const [user, setUser] = useState('');
  const [sellerId, setSellerId] = useState('');
  const [products, setProducts] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [status] = useState('Pendente');
  const [dropDownValue, setDropDownValue] = useState('Fulana Pereira');
  const history = useHistory();
  const userName = getUserName();
  const token = getUserToken();
  const {
    cart, setCart,
  } = useContext(appContext);

  useEffect(() => {
    setQuantity(Object.values(cart).map((item) => item.quantity));
  }, []);

  useEffect(() => {
    setProducts(Object.values(cart).map((item) => item.id));
  }, []);
  const sellMade = async () => {
    const data = {
      userId: user,
      sellerId,
      totalPrice: totalValue,
      deliveryAddress: address,
      deliveryNumber: number,
      status,
      products,
      quantity,
    };
    const url = 'http://localhost:3001/sales';
    setloading(true);
    const info = await axios.post(url, data, {
      headers: {
        authorization: token,
      },
    });
    setloading(false);
    history.push(`/customer/orders/${info.data}`);
  };

  useEffect(() => {
    // console.log('o carrinho', Object.values(cart).map(item=> item.subTotal))
    if (cart.length === 0) return setTotalValue(0);
    if (cart.length !== 0) {
      return setTotalValue(Object.values(cart)
        .map((item) => +item.subTotal).reduce((acc, tt) => acc + tt).toFixed(2)
        .replace(/\./g, ','));
    }
    // console.log(totalValue)
  }, [cart]);

  useEffect(() => {
    setloading(true);
    getData('http://localhost:3001/users/all')
      .then((res) => {
        setSellers(res);
        setUser(res.find((item) => item.name === userName).id);
        setSellerId(res.find((item) => item.name === dropDownValue).id);
        console.log(res);
      });
    setloading(false);
  }, []);

  return (
    <div className="facture">
      <div className="orders">
        <h3 className="aboveText">Finalizar Pedido</h3>
        <div className="tableBody">
          <CheckoutTable
            cart={ cart }
            loading={ loading }
            setCart={ setCart }
          />
        </div>
        <h1
          data-testid="customer_checkout__element-order-total-price"
          className="totalToPay"
        >
          Total: R$
          {' '}
          {totalValue}
        </h1>
      </div>
      <h1 className="titleDetails">Detalhes e Endereço de entrega</h1>
      <table className="detailsOfSell">
        <thead>
          <tr>
            <th>P Vendedora Responsavel</th>
            <th>Endereço</th>
            <th>Número</th>
          </tr>
        </thead>
        <tbody>
          <td>
            <DropDown
              testId="customer_checkout__select-seller"
              value={ dropDownValue }
              change={ setDropDownValue }
              state={ sellers }
              selectClass="dropDown"
            />
          </td>
          <td>
            <Input
              change={ setaddress }
              value={ address }
              testId="customer_checkout__input-address"
            />
            {' '}

          </td>
          <td>
            <Input
              change={ setnumber }
              value={ number }
              testId="customer_checkout__input-addressNumber"
            />
          </td>
        </tbody>
      </table>
      <Button
        onClick={ sellMade }
        disable={ false }
        testId="customer_checkout__button-submit-order"
        name="FINALIZAR PEDIDO"
        btnclass="FinishBuy"
      />
    </div>
  );
}
