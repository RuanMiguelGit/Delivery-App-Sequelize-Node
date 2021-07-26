import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../pages/Login';
import Register from '../pages/Registro';
import Products from '../pages/Products';
import Admins from '../pages/AdminHome';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/admin/manage" component={ Admins } />
        <Route exact path="/register" component={ Register } />
        {/* <Route exact path="/customer/checkout" component={  } />
        <Route exact path="/customer/orders" component={  } />
        <Route exact path="/customer/orders/:id" component={  } />
        <Route exact path="/customer/orders/:idVenda" component={  } />
        <Route exact path="/seller/orders" component={  } />
        <Route exact path="/seller/orders/:id." component={  } /> */}
        <Route path={ ['/login'] } component={ Login } />
        <Route path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </div>
  );
}

export default Routes;
