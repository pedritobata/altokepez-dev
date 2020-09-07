import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import Home from "./pages/Home/Home";
import { Switch, Route } from 'react-router-dom';
import Login from './pages/Auth/Login';


function App() {
  
  
  return (
    <div className="App">
      <Layout>
        <Switch>
          {/* <Route path="/login">
            <Login />
          </Route> */}
          <Route path="/">
            <Home />
          </Route>
        </Switch> 
      </Layout>
    </div>
  );
}

export default App;
