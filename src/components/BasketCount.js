import React, { useEffect } from "react";

const BasketCount = ({ basketCount, ...props }) => {
  useEffect(() => {
    let basketCountLabel =
      `Basket: ${basketCount} item` + (basketCount > 1 ? "" : "s");
    document.title = basketCountLabel;
  });

  return (
    <span>
      {basketCount} item{basketCount !== 1 ? "s" : ""}
    </span>
  );
};

export default BasketCount;
