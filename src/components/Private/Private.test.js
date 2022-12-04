import React from 'react';
import { render, screen } from '@testing-library/react';
import Private from './Private.component';

describe('Private component', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `Private ${mockSampleProp}`;

    render(<Private sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
