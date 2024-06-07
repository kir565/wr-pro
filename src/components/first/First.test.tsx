import { render, screen } from '@testing-library/react';
import { First } from './First';

describe('First component', () => {
  test('is render', () => {
    render(<First />);

    expect(screen.getByText(/hello/i)).toBeInTheDocument();
  });
});
