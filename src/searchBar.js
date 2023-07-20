import React, { Component } from "react";
class SearchBar extends Component {
  constructor(propis) {
    super(propis);
    this.state = {};
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="Izlash..." value="" />
        <p>
          <input type="checkbox" id="onlyInStock" name="onlyInStock" />
          <label for="onlyInStock">Faqat omborda mavjud mafsulotlar</label>
        </p>
      </div>
    );
  }
}

export default SearchBar;
