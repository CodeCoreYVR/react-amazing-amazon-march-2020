import React, { Component } from 'react';

class ProductNewPage extends Component {

  handleSubmit(event) {
    event.preventDefault();
    const { currentTarget } = event;
    const formData = new FormData(currentTarget);
    const params = {
      product: {
        title: formData.get('title'),
        description: formData.get('description'),
        price: formData.get('price'),
        sale_price: formData.get('salePrice')
      }
    }
    fetch(`http://localhost:3000/api/v1/products`, {
      method: 'POST',
      credentials: 'include',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(params)
    }).then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
    })
  }

  render() {
    return(
      <main>
        <h1>Product New Page</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor='title'>Title</label>
            <input type='text' name='title'></input>
          </div>
          <div>
            <label htmlFor='description'>Description</label>
            <textarea type='text' name='description'></textarea>
          </div>
          <div>
            <label htmlFor='price'>Price</label>
            <input type='number' name='price'></input>
          </div>
          <div>
            <label htmlFor='salePrice'>Sale Price</label>
            <input type='number' name='salePrice'></input>
          </div>
          <input type='submit' value='Create Product'/>
        </form>
      </main>
    )
  }
}

export default ProductNewPage