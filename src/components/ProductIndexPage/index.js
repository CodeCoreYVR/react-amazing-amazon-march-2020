import React, { Component } from 'react';

class ProductIndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: []
    }
  }

  componentDidMount() {
    fetch(`http://localhost:3000/api/v1/products`, {
      method: 'GET',
      credentials: 'include'
    }).then((res) => {
      return res.json()
    }).then((products) => {
      this.setState((state) => {
        return {
          products: products
        }
      })
    })
  }

  render() {
    return (
      <div>
        <h1>Product Index Page</h1>
        { this.state.products.map(p => {
          return(
            <li key={p.id}>
              <h2>{p.id} | {p.title}</h2>
              <small>{p.price}</small>
            </li>
          )
        }) }
      </div>
    )
  }
}

export default ProductIndexPage