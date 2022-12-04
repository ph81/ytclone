import React from 'react';
import { render, screen } from '@testing-library/react';
import LoginButton from './LoginButton.component';

describe('LoginButton component', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `LoginButton ${mockSampleProp}`;

    render(<LoginButton sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
