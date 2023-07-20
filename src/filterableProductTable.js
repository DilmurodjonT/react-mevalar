import React, { Component } from "react";
import SearchBar from "./searchBar";
import ProductTable from "./productTable";
class FilterableProductTable extends Component {
  constructor(propis) {
    super(propis);
    this.state = { filterText: "", inStockOnly: false };
  }
  render() {
    return (
      <div>
        <SearchBar />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
