import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test('Main header is present', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/main-header/i);
});

test('Dark mode buttom is persent', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/dark-mode-button/i);
});

test('player cards are present', () => {
  const { getByTestId } = render(<App />);
  getByTestId(/player-cards/i);
});