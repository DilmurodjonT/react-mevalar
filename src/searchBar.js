import React, { Component } from "react";
class SearchBar extends Component {
  constructor(propis) {
    super(propis);
    this.state = {};
  }

  handleFilterTextChange = (e) => {
    this.props.onFilterTextChange(e.target.value);
  };

  handleInStockChange = (e) => {
    this.props.onInStockChange(e.target.value);
  };
  render() {
    return (
      <div>
        <input
          type="text"
          placeholder="Izlash..."
          value={this.props.inputText}
          onChange={this.handleFilterTextChange}
        />
        <p>
          <input
            type="checkbox"
            id="onlyInStock"
            name="onlyInStock"
            checked={this.props.inStockOnly}
            onChange={this.handleInStockChange}
          />
          <label for="onlyInStock">Faqat omborda mavjud mafsulotlar</label>
        </p>
      </div>
    );
  }
}

export default SearchBar;
