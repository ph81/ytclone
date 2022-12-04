import React from 'react';
import { render, screen } from '@testing-library/react';
import ShowFavorites from './ShowFavorites.component';

describe('ShowFavorites component', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `ShowFavorites ${mockSampleProp}`;

    render(<ShowFavorites sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
