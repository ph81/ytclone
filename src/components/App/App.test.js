import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App.component';

describe('App component', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `App ${mockSampleProp}`;

    render(<App sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
