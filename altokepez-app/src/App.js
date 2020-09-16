import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import Home from "./pages/Home/Home";
import { Switch, Route } from 'react-router-dom';

function App() {
  
  
  return (
    <div className="app">
      <Layout>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
        </Switch> 
      </Layout>
    </div>
  );
}

export default App;
