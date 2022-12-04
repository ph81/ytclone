import React from 'react';
import { render, screen } from '@testing-library/react';
import Error from './Error.component';

describe('Error component', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `Error ${mockSampleProp}`;

    render(<Error sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
