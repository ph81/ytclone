import React from 'react';
import { render, screen } from '@testing-library/react';
import Detail from './Detail.page';

describe('Detail page', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `Detail ${mockSampleProp}`;

    render(<Detail sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
