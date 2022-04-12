import React from 'react';

const BasketTotal = (props) => {

  return <div id="baskettotal">{props.formatCurrency(props.basketTotal)}</div>;
}

export default BasketTotal;