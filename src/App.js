import React, { Component } from 'react';
import Header from './components/header';
import Form from './components/form';
import Summary from './components/summary';
import './App.css';
import './reset.css';

class App extends Component {

  render() {
    return (
        <div>
    <Header />
    <div className="container">
            <div className="subtitle center">
                <span>CHECKOUT</span>
            </div>
            <div className="row">
               <Summary />
                <Form />
            </div>
        </div>
        </div>
    );
  }
}

export default App;
