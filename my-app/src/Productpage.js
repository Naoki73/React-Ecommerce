import React, { Component } from 'react'

export default class Productpage extends Component {
  render() {
    const product = this.props.productInfo
    return (
      <div className="card" style={{width: "18rem"}}>
        <img src="https://media.istockphoto.com/id/1075599562/photo/programmer-working-with-program-code.jpg?s=612x612&w=0&k=20&c=n3Vw5SMbMCWW1YGG6lnTfrwndNQ8B_R4Vw-BN7LkqpA=" className="card-img-top" alt={ product.title }/>
        <div className="card-body">
          <h5 className="card-title">{ product.title }</h5>
          <h6 className="card-subtitle mb-2 text-muted">{ product.price }</h6>
          <p class="card-text">{ product['description'] }</p>
          {/* <a href={''} class="btn btn-primary">Buy</a> 

          #Not sure if this line is necessary or if there's some other way to make it work because I assume we should make this do something besides just display a dictionary item? Add it to cart or something for example*/}
        </div>
      </div>
    )
  }
}
