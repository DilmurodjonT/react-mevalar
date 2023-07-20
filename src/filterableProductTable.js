import React, { Component } from "react";
import SearchBar from "./searchBar";
import ProductTable from "./productTable";
class FilterableProductTable extends Component {
  constructor(propis) {
    super(propis);
    this.state = {};
  }
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable products={this.props.products} />
      </div>
    );
  }
}

export default FilterableProductTable;
