import React from 'react';
import { render, screen } from '@testing-library/react';
import FavDetail from './FavDetail.component';

describe('FavDetail component', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `FavDetail ${mockSampleProp}`;

    render(<FavDetail sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
