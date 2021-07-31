/* eslint-disable */
import React, {  useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Button from './Button';
import DropDown from './DropDown';
import Input from './Input';
import '../Styles/checkout.css';
import { getData, sendData} from '../services/apiRequest';
import {getUserName} from '../services/localStorage'
import appContext from '../context/appContext';

export default function Checkout() {
  const [loading, setloading] = useState(false);
  const [sellers, setSellers] = useState([]);
  const [address, setaddress] = useState('');
  const [number, setnumber] = useState('');
  const [userId, setUserId] = useState('')
  const [, setError] = useState([]);
  const [totalValue, setTotalValue] = useState(0);
  const [status, setstatus] = useState('Pendente');
  const [dropDownValue, setDropDownValue] = useState('Fulana Pereira');
  const history = useHistory();
  const userName = getUserName()

    const {
    cart, setCart
       } = useContext(appContext);

      useEffect(() => {
        if (userId.length !== 0) return history.push(`/customer/orders/${userId}`);
      }, [userId]);
    

  const sellMade = async (e) => {
    const data = {
      userId:sellers.find(item => item.name === userName).id,
      sellerId: sellers.find(item => item.name === dropDownValue).id,
      totalPrice:totalValue,
      deliveryAddress:address,
      deliveryNumber:number,
      status:status,
      products:Object.values(cart).map(item => item.id)
    }
    setloading(true);
    e.preventDefault();
    await sendData('http://localhost:3001/sales', data)
      .then((res) => {
        console.log('testando a responsa da venda', res);
        setUserId(res.data);
        console.log('userId response', userId)
      })
      .catch((error) => {
        setError(error.response.data);
      });

    setloading(false);

  }

  useEffect(() => {

      // console.log('o carrinho', Object.values(cart).map(item=> item.subTotal))
      if(cart.length === 0) return setTotalValue(0)
      if(cart.length !== 0) return setTotalValue( Object.values(cart).map(item => +item.subTotal).reduce((acc, tt) => acc +tt).toFixed(2))
      // console.log(totalValue)

    }, [cart]);

  useEffect( () => {
    setloading(true)
     getData('http://localhost:3001/users/all')
    .then((res) => {
      setSellers(res)
    })
      setloading(false)
}, [cart]);

  const removeItem = (id) => {
    return setCart(Object.values(cart).filter(item => item.id !== id))
  }


  
  return (
    <div className='facture'>
    <div className='orders'>
    <h3 className='aboveText'>Finalizar Pedido</h3>
    <div className='tableBody'>
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
      {loading ? "Carregando": Object.values(cart).map((item, index) => {
       return  <tr key={item.id}>
          <td  data-testid={`customer_checkout__element-order-table-item-number-${index +1}`} className='tableId'>{index + 1}</td>
          <td data-testid={`customer_checkout__element-order-table-name-${index + 1}`} className='tableDesc'>{item.name}</td>
          <td data-testid ={`customer_checkout__element-order-table-quantity-${index +1 }`}className='tableQua'>{item.quantity}</td>
          <td data-testid={`customer_checkout__element-order-table-unit-price-${index +1}`} className='tableVal'>{item.price}</td>
          <td data-testid={`customer_checkout__element-order-table-sub-total-${index+1}`} className='tableTotal'>{item.subTotal}</td>
          <td ><button data-testid={`customer_checkout__element-order-table-remove-${index+1}`} onClick={ () => removeItem(item.id) }
 className='tableButton' name='Remover' > Remover </button> </td>
        </tr>
      })}
    </tbody>
      </table>
    </div>
    <h1 data-testid={"customer_checkout__element-order-total-price"}className='totalToPay'>Total: R${totalValue}</h1>
    </div>
<div>
<h1 className='titleDetails'>Detalhes e Endereço de entrega</h1>
<table className='detailsOfSell'>
        <thead>
      <tr>
        <th>P Vendedora Responsavel</th>
        <th>Endereço</th>
        <th>Número</th>
      </tr>
      </thead>
      <tbody>
     <td><DropDown testId={"customer_checkout__select-seller"} value={dropDownValue} change={setDropDownValue} state={sellers} selectClass='dropDown' /></td> 
     <td><Input 
      change={setaddress}
      value={address}
      testId={"customer_checkout__input-address"}
     /> </td>
     <td><Input 
        change={setnumber}
        value={number}
        testId={"customer_checkout__input-addressNumber"}

     /></td>
      </tbody>
      </table>
</div>
<Button onClick={sellMade} disable={false} testId={"customer_checkout__button-submit-order"}  name='FINALIZAR PEDIDO' btnclass='FinishBuy'/>
</div>
  );
}
