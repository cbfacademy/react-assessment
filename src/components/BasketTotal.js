import React from 'react';
import { formatCurrency } from "./utils.js";

const BasketTotal = (props) => {
  return <div id="baskettotal">{formatCurrency(props.basketTotal)}</div>;
};

export default BasketTotal;