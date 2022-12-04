import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoDetail from './VideoDetail.component';

describe('VideoDetail component', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `VideoDetail ${mockSampleProp}`;

    render(<VideoDetail sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
