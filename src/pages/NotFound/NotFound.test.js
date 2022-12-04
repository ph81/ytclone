import React from 'react';
import { render, screen } from '@testing-library/react';
import NotFound from './NotFound.page';

describe('NotFound page', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `NotFound ${mockSampleProp}`;

    render(<NotFound sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
