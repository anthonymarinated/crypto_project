import React from 'react';
import { screen, render, cleanup, fireEvent } from '@testing-library/react';
import App from '../client/App';

describe('App', () => {
    test('renders App component', () => {
      render(<App />);
    });
  });