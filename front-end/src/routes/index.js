import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Registro';
import Products from '../pages/Products';
import Admins from '../pages/AdminHome';
import Checkout from '../pages/Checkout';
import ClientOrders from '../pages/ClientOrders';
import SellerOrders from '../pages/SellerOrders';
import DetailsCustomerOrders from '../pages/DetailsCustomerOrders';
import DetailsSellerOrders from '../pages/DetailsSellerOrders';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/admin/manage" component={ Admins } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route exact path="/customer/orders/:id" component={ DetailsCustomerOrders } />
        <Route exact path="/seller/orders/:id" component={ DetailsSellerOrders } />
        <Route exact path="/customer/orders" component={ ClientOrders } />
        <Route exact path="/seller/orders" component={ SellerOrders } />
        {/* <Route exact path="/customer/checkout" component={  } /> */}
        {/* <Route exact path="/customer/orders/:idVenda" component={  } /> */}
        <Route path={ ['/login'] } component={ Login } />
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
