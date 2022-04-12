import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import BasketTotal from '../components/BasketTotal';
import { formatCurrency } from "../components/utils.js";

describe("BasketTotal functionality", () => {
  test("Displays correct basket total", () => {
    const basketTotal = 10;
    const { getByText } = render(<BasketTotal basketTotal={basketTotal} />);
    expect(getByText(formatCurrency(basketTotal))).toBeInTheDocument();
  });
});