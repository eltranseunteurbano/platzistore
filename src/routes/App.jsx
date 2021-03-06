import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AppProvider from '../context/AppContext';
import Home from '../containers/Home';
import Checkout from '../containers/Checkout';
import Information from '../containers/Information';
import Payment from '../containers/Payment';
import Success from '../containers/Success';
import NotFound from '../containers/NotFound';
import Layout from '../components/Layout';

const App = () => (
  <AppProvider>
    <BrowserRouter>
      <Layout>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/checkout/information" component={Information} />
          <Route exact path="/checkout/payment" component={Payment} />
          <Route exact path="/checkout/success" component={Success} />
          <Route path="/404" component={NotFound} />
        </Switch>
      </Layout>
    </BrowserRouter>
  </AppProvider>
);

export default App;
