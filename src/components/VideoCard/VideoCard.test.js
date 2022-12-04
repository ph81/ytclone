import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoCard from './VideoCard.component';

describe('VideoCard component', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `VideoCard ${mockSampleProp}`;

    render(<VideoCard sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
