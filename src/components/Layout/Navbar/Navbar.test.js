import React from 'react';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar.component';

describe('Navbar component', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `Navbar ${mockSampleProp}`;

    render(<Navbar sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
