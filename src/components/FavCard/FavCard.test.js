import React from 'react';
import { render, screen } from '@testing-library/react';
import FavCard from './FavCard.component';

describe('FavCard component', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `FavCard ${mockSampleProp}`;

    render(<FavCard sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
