// /* eslint-disable */
// import React, { useState } from 'react';
// import '../Styles/products.css';

// export default function ProductsGenerator({ products }) {
//   const countUp = 0;
//   const [value, setValue] = useState(0);
//   const riseUp = (item) => {
//     console.log('id', item.id);
//     const identification = item.id;
//     const value = products.map((item) => item);
//     if (value.find((item) => item.id === identification)) {
//       item.quantity += 1;
//       setValue(item.quantity);
//       return item.quantity;
//       // return countUp
//     }

//     // if(products.find(item.id) === item.id) {
//     //   return countUp++
//     // }
//     console.log('value', value);

//     // setValue(value + 1)
//   };

//   const riseDown = (item) => {
//     // setValue(value - 1)
//     console.log('id Down', item.id);
//   };

//   return (
//     <div>
//       {products.map((item) => (<div key={ item.id } className="products">
//         <p className="product-name">
//           {' '}
//           {item.name}
//         </p>
//         <p className="product-price">
//           {item.price}
//           {' '}
//         </p>
//         <img className="product-picture" src={ item.url_image } />
//         <div className="product-value">
//           {' '}
//           {value}
//         </div>
//         <button onClick={ () => riseUp(item) } className="product-increase">+</button>
//         <button onClick={ () => riseDown(item) } className="product-increase">-</button>
//                                </div>))}

//     </div>

//   );
// }
