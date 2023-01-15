import React from "react";
import Product from "./Product";
import PropTypes from "prop-types";

const ProductList = ({ items, basketCount, ...props }) => {
  return (
    <div className="results">
      <h2>Suggested For You</h2>
      {items.filter((item) => !item.inBasket).length === 0 ? (
        <div className="empty">No items found...</div>
      ) : (
        items
          .filter((item) => !item.inBasket)
          .map((item) => <Product key={item.trackId} item={item} {...props} />)
      )}
    </div>
  );
};

ProductList.propTypes = {
  items: PropTypes.array.isRequired,
};

export default ProductList;
