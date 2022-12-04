import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card.component';

describe('Card component', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `Card ${mockSampleProp}`;

    render(<Card sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
