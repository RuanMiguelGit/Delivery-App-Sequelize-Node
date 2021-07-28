/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { getData } from '../services/apiRequest';
import CardProduct from '../components/CardProduct';
import Header from '../components/Header';

// import do dado mockado
import mockProducts from '../services/mockProducts.json'

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData('http://localhost:3001/products')
      .then((data) => {
        // console.log('retorno API', data);
        setProducts(data);
      });
      // console.log('dado mockado', mockProducts.products)
    // setProducts(mockProducts.products); // dados mockados
    setLoading(false);
  }, []);

  return (
    <>
      <Header />

      <ul>
        {loading 
        ? <loading /> 
        : products.map(product => <CardProduct item={ product } />)}
      </ul>
    </>
  );
}
