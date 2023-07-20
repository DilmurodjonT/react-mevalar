import React, { Component } from "react";
import ProductRow from "./productRow";
class ProductTable extends Component {
  constructor(propis) {
    super(propis);
  }
  render() {
    const filterText = this.props.filterText;
    const inStockOnly = this.props.filterText;

    const rows = [];
    this.props.products.forEach((product) => {
      if (product.name.indexOf(filterText.toLowerCase()) === -1) {
        return;
      }
      if (inStockOnly && !product.stocked) {
        return;
      }
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
