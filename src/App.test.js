// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CryptoFlowPlus title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CryptoFlowPlus/i);
    expect(titleElement).toBeInTheDocument();
});
