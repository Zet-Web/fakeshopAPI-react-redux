// import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import './App.css';
import ProductListing from './components/product-list/productListing';
import Login from './components/login/login';
import ProductDetails from './components/product-detail/productDetails';

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={ProductListing} />
          <Route path='/product/:productId' exact component={ProductDetails} />
          <Route>404 not found</Route>
        </Switch>
      </Router>
    </div>
    /*  <Fragment>

      <Switch>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/products'>
          <ProductListing />
        </Route>
      </Switch>
    </Fragment>*/
  );
}

export default App;
