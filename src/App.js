import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import ProductList from './components/ProductList';
import AboutUs from './components/AboutUs';
import ProductUse from './components/ProductUse';

class App extends Component {
  render() {
    return (
      <div className="App">
  
        <Header />
        <ProductList />
        <ProductUse />
        <AboutUs />
          <p>
           
          </p>
          {/* <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a> */}

      </div>
    );
  }
}

export default App;
