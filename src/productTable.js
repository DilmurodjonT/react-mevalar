import React, { Component } from "react";
import ProductRow from "./productRow";
class ProductTable extends Component {
  constructor(propis) {
    super(propis);
    this.state = {};
  }
  render() {
    const rows = [];
    this.props.products.forEach((product) => {
      rows.push(<ProductRow product={product} />);
    });
    return (
      <table>
        <thead>
          <tr>
            <th align="left">Nomi</th>
            <th align="left">Narhi</th>
          </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

export default ProductTable;
