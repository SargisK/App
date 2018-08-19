import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from './Header.jsx';
import Cars from './Cars';
import CarInfo from './CarInfo';
import Home from './Home';

class App extends Component {
  render() {

    return (
      <BrowserRouter>
        <div>
          <Header />
          <section>
            <Route exact path='/' component={Home} />
            <Route path='/cars' component={Cars} />
            <Route path='/carinfo' component={CarInfo} />
          </section>
        </div>
      </BrowserRouter>
    )
  }
}

export default App; 