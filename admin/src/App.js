import React, { Component } from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Login from './component/Login';
import ProductCategories from './component/ProductCategories';
import ProductList from './component/ProductList';
import Invoices from './component/Invoices';
import SingleInvoice from './component/SingleInvoice';

class App extends Component {
  render() 
  {
    return (

      <div>
            <Route exact path ="/" component={Login}/>
            <Route path="/productcategories" component={ProductCategories}/>
            <Route path="/productlist" component={ProductList}/>
            <Route path="/invoices" component={Invoices}/>
            <Route path="/singleinvoice" component={SingleInvoice}/>cd
          </div>
    );
  }
}

export default App;
