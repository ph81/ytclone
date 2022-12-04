import React from 'react';
import { render, screen } from '@testing-library/react';
import FavButton from './FavButton.component';

describe('FavButton component', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `FavButton ${mockSampleProp}`;

    render(<FavButton sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
