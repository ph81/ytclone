import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from './Loading.component';

describe('Loading component', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `Loading ${mockSampleProp}`;

    render(<Loading sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
