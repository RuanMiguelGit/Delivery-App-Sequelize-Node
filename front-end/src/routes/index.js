import React from 'react';
import { Switch, Route } from 'react-router-dom';

function Routes() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={  } />
        <Route exact path="/login" component={  } />
        <Route exact path="/register" component={  } />
        <Route exact path="/customer/products" component={  } />
        <Route exact path="/customer/checkout" component={  } />
        <Route exact path="/customer/orders" component={  } />
        <Route exact path="/customer/orders/:id" component={  } />
        <Route exact path="/customer/orders/:idVenda" component={  } />
        <Route exact path="/seller/orders" component={  } />
        <Route exact path="/seller/orders/:id." component={  } />
        <Route exact path="/admin/manage" component={  } />
      </Switch>
    </div>
  );
}

export default Routes;
