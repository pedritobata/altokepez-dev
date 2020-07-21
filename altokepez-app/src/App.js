import React from 'react';
import './App.css';
import Layout from './containers/Layout/Layout';
import Home from "./pages/Home/Home";


function App() {
  
  
  return (
    <div className="App">
      <Layout>
        <Home /> 
      </Layout>
    </div>
  );
}

export default App;
