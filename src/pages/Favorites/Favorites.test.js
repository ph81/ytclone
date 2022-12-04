import React from 'react';
import { render, screen } from '@testing-library/react';
import Favorites from './Favorites.page';

describe('Favorites page', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `Favorites ${mockSampleProp}`;

    render(<Favorites sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
