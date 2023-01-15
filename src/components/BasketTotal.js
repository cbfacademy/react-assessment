import React from "react";
import { formatCurrency } from "../lib/utils.js";

const BasketTotal = ({ basketTotal, ...props }) => {
  return <div id="baskettotal">{formatCurrency(basketTotal)}</div>;
};

export default BasketTotal;
