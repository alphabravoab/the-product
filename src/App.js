import React, { Component } from 'react';
import Header from './components/Header';
import './App.css';
import ProductList from './components/ProductList';

class App extends Component {
  render() {
    return (
      <div className="App">
  
        <Header />
        <ProductList />
          <p>
           
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>

      </div>
    );
  }
}

export default App;
