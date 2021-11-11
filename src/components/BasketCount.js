import React, {useEffect} from 'react';

const BasketCount = (props) => {

  useEffect(() => {
    let basketCountLabel = `Basket: ${props.basketCount} item` + (props.basketCount>1?"":"s");
    document.title = basketCountLabel;
  });

  return (
    <span>
      {props.basketCount} item{props.basketCount!==1?"s":""}
    </span>
  );
}

export default BasketCount;