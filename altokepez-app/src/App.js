import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import Home from "./pages/Home/Home";
import { Switch, Route } from 'react-router-dom';
import ShopScreen from './pages/ShopScreen/ShopScreen';
import ProductDetailScreen from './pages/ProductDetailScreen.js/ProductDetailScreen';

function App() {
  
  
  return (
    <div className="app">
      <Layout>
        <Switch>
          <Route path="/shop/products" exact component={ProductDetailScreen} />
          <Route path="/shop/:category" exact component={ShopScreen} />
          <Route path={["/", "/home"]} exact component={Home} />
        </Switch> 
      </Layout>
    </div>
  );
}

export default App;
