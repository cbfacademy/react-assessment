import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router, Route } from 'react-router-dom'
import { render, fireEvent, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { createMemoryHistory } from 'history';
import App from '../../src/App';
import { readFile } from './utils.js';
import About from '../pages/About';
import Basket from '../components/Basket';
import BasketTotal from '../components/BasketTotal';
import Header from '../components/Header';
import ProductList from '../components/ProductList';
import Search from '../components/Search';
import data from '../models/data.json';

describe("Application structure", () => {
  test("/src/components/Basket.js found", () => {
    expect(readFile("/src/components/Basket.js")).toBeTruthy();
  });

  test("/src/components/BasketCount.js found", () => {
    expect(readFile("/src/components/BasketCount.js")).toBeTruthy();
  });

  test("/src/components/BasketTotal.js found", () => {
    expect(readFile("/src/components/BasketTotal.js")).toBeTruthy();
  });

  test("/src/components/Header.js found", () => {
    expect(readFile("/src/components/Header.js")).toBeTruthy();
  });

  test("/src/components/Product.js found", () => {
    expect(readFile("/src/components/Product.js")).toBeTruthy();
  });

  test("/src/components/ProductList.js found", () => {
    expect(readFile("/src/components/ProductList.js")).toBeTruthy();
  });

  test("/src/components/Search.js found", () => {
    expect(readFile("/src/components/Search.js")).toBeTruthy();
  });

  test("/src/models/data.json found", () => {
    expect(readFile("/src/models/data.json")).toBeTruthy();
  });

  test("/src/pages/About.js found", () => {
    expect(readFile("/src/pages/About.js")).toBeTruthy();
  });
});

it('renders <App/> without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

describe("Components load as expected", () => {
  test('Displays header', () => {
    const count = 0;
    render(<BrowserRouter>
      <Route exact path="/" render={() => (
        <Header basketCount={count} />
      )} />
    </BrowserRouter>);
    expect(document.querySelectorAll("a").length).toBeGreaterThanOrEqual(3);
  });

  test('landing on a bad page', () => {
    const history = createMemoryHistory()
    history.push('/about')
    render(
      <Router history={history}>
        <About />
      </Router>,
    )
  
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument();
  });

  test('Displays correct basket total', () => {
    const basketTotal = 10;
    const { getByText } = render(<BasketTotal basketTotal={basketTotal} />);
    expect(getByText(basketTotal)).toBeInTheDocument();
  })

  test('Displays initial product list', () => {
    const expectedLength = data.length;
    render(<ProductList items={data} addToBasket={null} removeFromBasket={null} itemCount={data.length} />);
    expect(document.querySelectorAll('.product').length).toBe(expectedLength);
    expect(document.querySelectorAll('.empty').length).toBe(0);
  })

  test('Displays empty product list', () => {
    const emptyData = [];
    const expectedLength = emptyData.length;
    const { getByText } = render(<ProductList items={emptyData} addToBasket={null} removeFromBasket={null} itemCount={emptyData.length} />);
    expect(document.querySelectorAll('.product').length).toBe(expectedLength);
    expect(document.querySelectorAll('.empty').length).toBe(1);
    expect(getByText('No items found...')).toBeInTheDocument();
  })
});

test('Displays empty basket', () => {
  const emptyBasket = [];
  const expectedLength = emptyBasket.length;
  const basketCount = 0;
  const basketTotal = 0;
  const { getByText } = render(<Basket basket={emptyBasket} addToBasket={null} removeFromBasket={null} basketCount={basketCount} basketTotal={basketTotal} />);
  expect(document.querySelectorAll('.product').length).toBe(expectedLength);
  expect(document.querySelectorAll('.empty').length).toBe(1);
  expect(getByText('Sorry, no items in basket...')).toBeInTheDocument();
});

test('Displays populated basket', () => {
  const basket = data.slice(0, 3);
  const expectedLength = basket.length;
  const basketCount = basket.length;
  const basketTotal = basket.reduce((acc, item) => acc + item.trackPrice, 0);
  render(<Basket basket={basket} addToBasket={null} removeFromBasket={null} basketCount={basketCount} basketTotal={basketTotal} />);
  expect(document.querySelectorAll('.product').length).toBe(expectedLength);
  expect(document.querySelectorAll('.empty').length).toBe(0);
});

test('calls addToBasket prop when clicked', () => {
  const addToBasket = jest.fn();
  render(<ProductList items={data.slice(0, 1)} addToBasket={addToBasket} itemCount={data.length} />);
  fireEvent.click(screen.getByRole('button'));
  expect(addToBasket).toHaveBeenCalledTimes(1)
});

test('calls removeFromBasket prop when clicked', async () => {
  const removeFromBasket = jest.fn();
  const products = data.slice(0, 1).map(item => ({ ...item, inBasket: true }));
  render(<Basket basket={products} removeFromBasket={removeFromBasket} basketCount={products.length} />);
  const button = screen.getByRole('button');
  fireEvent.click(button);
  expect(removeFromBasket).toHaveBeenCalledTimes(1);
});

describe("Search function", () => {
  test("it should search by a search term (link)", () => {
    const term = 'iPhone';
    const search = jest.fn();
    const setTerm = jest.fn();
    render(<Search term={term} search={search} setTerm={setTerm}/>);
    fireEvent.click(screen.getByRole('button'));
    expect(search).toHaveBeenCalledTimes(1);
    fireEvent.change(screen.getByRole('textbox'), { target: { value: "Samsung" } });
    expect(setTerm).toHaveBeenCalledTimes(1);
  });
});