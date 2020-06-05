import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ProductIndexPage from '../ProductIndexPage';


class App extends Component {
  render() {
    return(
      <div>
        <BrowserRouter>
          <Route path='/products' component={ProductIndexPage}/>
        </BrowserRouter>
      </div>
    )
  }
}

export default App