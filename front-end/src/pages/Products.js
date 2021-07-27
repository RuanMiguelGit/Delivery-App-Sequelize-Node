/* eslint-disable */
import React, { useEffect } from 'react';
// import { getData } from '../services/apiRequest';
// import ProductsGenerator from '../components/ProductsGenerator';
import Header from '../components/Header';

// import do dado mockado
import mockProducts from '../services/mockProducts.json'
import { loading } from 'blessed';

export default function Products() {
  // const [products, setProducts] = useState([]);
  // const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    // getData('http://localhost:3001/products')
    //   .then(() => {
    //     setProducts(data);
    //   });
    const products = JSON.parse(mockProducts);
    console.log(products);
    setProducts(products);
    setLoading(false);
  }, []);

  return (
    <>
      <Header />

      <ul>
        {loading ? <loading /> : products.map(item => <li key={item.id}> {item.name} </li>)}
      </ul>

      <p>Teste</p>
    </>
  );
}
