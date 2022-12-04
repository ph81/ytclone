import React from 'react';
import { render, screen } from '@testing-library/react';
import Home from './Home.page';

describe('Home page', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `Home ${mockSampleProp}`;

    render(<Home sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
