import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductIndexPage from '../ProductIndexPage';
import ProductNewPage from '../ProductNewPage';

class App extends Component {
  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/sessions`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: 'js@winterfell.gov',
        password: 'supersecret'
      })
    }).then((res) => {
      return res.json()
    }).then((data) => {
      console.log(data);
    })
  }
  render() {
    return(
      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/products' exact component={ProductIndexPage}/>
            <Route path='/products/new' component={ProductNewPage}/>
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App