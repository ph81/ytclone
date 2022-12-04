import React from 'react';
import { render, screen } from '@testing-library/react';
import LogoutButton from './LogoutButton.component';

describe('LogoutButton component', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `LogoutButton ${mockSampleProp}`;

    render(<LogoutButton sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
