import React from "react";
import ReactDOM from "react-dom";
import FilterableProductTable from "./filterableProductTable";

const PRODUCTS = [
  { price: "$3.10", stocked: true, name: "Shaftoli" },
  { price: "$3.40", stocked: true, name: "Gilos" },
  { price: "$1.80", stocked: false, name: "Nok" },
  { price: "$2.00", stocked: true, name: "sut" },
  { price: "$1.50", stocked: false, name: "Olma Sharbati" },
  { price: "$0.30", stocked: true, name: "Mineral suv" },
];

ReactDOM.render(
  <FilterableProductTable products={PRODUCTS} />,
  document.getElementById("root")
);
