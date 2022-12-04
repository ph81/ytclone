import React from 'react';
import { render, screen } from '@testing-library/react';
import VideoList from './VideoList.component';

describe('VideoList component', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `VideoList ${mockSampleProp}`;

    render(<VideoList sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
