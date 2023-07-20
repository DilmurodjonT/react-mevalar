import React, { Component } from "react";
class ProductRow extends Component {
  constructor(propis) {
    super(propis);
    this.state = {};
  }
  render() {
    const product = this.props.product;
    return (
      <tr>
        <td>{product.name}</td>
        <td>{product.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
