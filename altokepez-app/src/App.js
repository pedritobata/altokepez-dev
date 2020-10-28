import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import Home from "./pages/Home/Home";
import { Switch, Route } from 'react-router-dom';
import ShopScreen from './pages/ShopScreen';

function App() {
  
  
  return (
    <div className="app">
      <Layout>
        <Switch>
          <Route path="/shop" exact component={ShopScreen} />
          <Route path={["/", "/home"]} exact component={Home} />
        </Switch> 
      </Layout>
    </div>
  );
}

export default App;
