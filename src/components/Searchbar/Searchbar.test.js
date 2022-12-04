import React from 'react';
import { render, screen } from '@testing-library/react';
import Searchbar from './Searchbar.component';

describe('Searchbar component', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `Searchbar ${mockSampleProp}`;

    render(<Searchbar sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
