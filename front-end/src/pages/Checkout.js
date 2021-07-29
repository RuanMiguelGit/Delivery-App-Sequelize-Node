/* eslint-disable */
import React, {  useEffect, useState } from 'react';
import SalesData from '../mocks/odersMock.json'
import Button from '../components/Button';
import DropDown from '../components/DropDown';
import Input from '../components/Input';
import '../Styles/checkout.css';
import { getData } from '../services/apiRequest';
import {getUserName} from '../services/localStorage'

export default function Checkout() {
  const [checkOutMock, setcheckOutMock] = useState([]);
  const [loading, setloading] = useState(false);
  const [info, setInfo] = useState([])
  const [sellers, setSellers] = useState([]);
  const [address, setaddress] = useState('');
  const [number, setnumber] = useState('');
  const [status, setstatus] = useState('pendente');
  const [dropDownValue, setDropDownValue] = useState('Fulana Pereira');
  const userName = getUserName()

  const sellMade = async () => {
    if(loading) return <p> Carregando</p>
    const data = {
      userId:sellers.find(item => item.name === userName).id,
      sellerId: sellers.find(item => item.name === dropDownValue).id,
      totalPrice: SalesData.map(item => item.subtotal).reduce((acc, tt) => acc +tt),
      deliveryAddress:address,
      deliveryNumber:number,
      saleDate:Date.now(),
      status:status
    }
    return console.log(data)
  }
  // useEffect(() => {
  //     setloading(true)
  //       setcheckOutMock(SalesData)
  //       setloading(false )
  //   // console.log(checkOutMock)
  // }, []);

  const log =() => {
    return console.log('ok')
  }


  useEffect( () => {
    setloading(true)
     getData('http://localhost:3001/users/all')
    .then((res) => {
      setSellers(res)

    })
      setloading(false)
    //   console.log(info)
    // console.log(sellers.find(item => item.name === dropDownValue).id)
}, []);

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
      {loading ? "Carregando": SalesData.map(item => {
       return  <tr key={item.id}>
          <td className='tableId'>{item.id}</td>
          <td className='tableDesc'>{item.description}</td>
          <td className='tableQua'>{item.quantity}</td>
          <td className='tableVal'>{item.valorUnitario}</td>
          <td className='tableTotal'>{item.subtotal}</td>
          <td ><button           onClick={ log }
 className='tableButton' name='Remover' > Remover </button> </td>
        </tr>
      })}
    </tbody>
      </table>
    </div>
    <h1 className='totalToPay'>Total: R${SalesData.map(item => item.subtotal).reduce((acc, tt) => acc +tt)}</h1>
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
     <td><DropDown value={dropDownValue} change={setDropDownValue} state={sellers.filter(item => item.role ==='seller')} selectClass='dropDown' /></td> 
     <td><Input 
      change={setaddress}
      value={address}
     /> </td>
     <td><Input 
        change={setnumber}
        value={number}
     /></td>
      </tbody>
      </table>
</div>
</div>
  );
}
