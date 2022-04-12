import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import ProductList from '../components/ProductList';
import data from '../models/data.json';

describe("ProductList functionality", () => {
  test('Displays initial product list', () => {
    const expectedLength = data.length;
    const formatCurrency = (value) => {
      return "£" + value;
    };
    render(
      <ProductList
        items={data}
        addToBasket={null}
        removeFromBasket={null}
        itemCount={data.length}
        formatCurrency={formatCurrency}
      />
    );
    expect(document.querySelectorAll('.product').length).toBe(expectedLength);
    expect(document.querySelectorAll('.empty').length).toBe(0);
  });

  test('Displays empty product list', () => {
    const emptyData = [];
    const expectedLength = emptyData.length;
    const formatCurrency = (value) => {
      return "£" + value;
    };
    const { getByText } = render(
      <ProductList
        items={emptyData}
        addToBasket={null}
        removeFromBasket={null}
        itemCount={emptyData.length}
        formatCurrency={formatCurrency}
      />
    );
    expect(document.querySelectorAll('.product').length).toBe(expectedLength);
    expect(document.querySelectorAll('.empty').length).toBe(1);
    expect(getByText('No items found...')).toBeInTheDocument();
  });
});