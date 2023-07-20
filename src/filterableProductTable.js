import React, { Component } from "react";
import SearchBar from "./searchBar";
import ProductTable from "./productTable";
class FilterableProductTable extends Component {
  constructor(propis) {
    super(propis);
    this.state = { filterText: "", inStockOnly: false };
  }

  handleFilterTextChange = (filterText) => {
    this.setState({
      filterText: filterText,
    });
  };

  handleInStockChange = (inStockOnly) => {
    this.setState({
      inStockOnly: inStockOnly,
    });
  };
  render() {
    return (
      <div>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
        />
        <ProductTable
          products={this.props.products}
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onInStockChange={this.handleInStockChange}
        />
      </div>
    );
  }
}

export default FilterableProductTable;
