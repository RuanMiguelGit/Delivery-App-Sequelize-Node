/* eslint-disable */

import React, { useState, useEffect } from 'react';
import { getData } from '../services/apiRequest';
import ProductsGenerator from '../components/ProductsGenerator';

export default function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getData('http://localhost:3001/products')
      .then((data) => {
        setProducts(data);
      });
    setLoading(false);
  }, []);

  return (
    <div>

      {loading ? <p> Carregado</p> : <ProductsGenerator products={ products } />}

      {/* <ul>
{loading ?<p> Carregado</p> : products.map(item => <li key={item.id}> {item.name} </li>)}
</ul>
           */}
    </div>
  );
}
