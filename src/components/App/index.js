import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import ProductIndexPage from '../ProductIndexPage';
import ProductNewPage from '../ProductNewPage';
import SignInPage from '../SignInPage';
import Navbar from '../Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentUser: {}
    }
    this.getCurrentUser = this.getCurrentUser.bind(this);
    this.handleSignIn = this.handleSignIn.bind(this);
  }

  componentDidMount() {
    this.getCurrentUser();
  }

  getCurrentUser() {
    fetch(`http://localhost:3000/api/v1/users/current`, {
      credentials: 'include'
    }).then((res) => {
      return res.json()
    }).then((data) => {
      this.setState((state) => {
        return {
          currentUser: data
        }
      })
    })
  }

  handleSignIn(params) {
    fetch(`http://localhost:3000/api/v1/sessions`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then((res) => {
      return res.json()
    }).then((data) => {
      this.getCurrentUser()
    })
  }
  render() {
    return(
      <div>
        <BrowserRouter>
          <Navbar currentUser={this.state.currentUser}/>
          <Switch>
            <Route path='/products' exact component={ProductIndexPage}/>
            <Route path='/products/new' component={ProductNewPage}/>
            <Route path='/sign_in' render={(routeProps) => <SignInPage handleSignIn={this.handleSignIn} {...routeProps}/>} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}

export default App