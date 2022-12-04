import React from 'react';
import { render, screen } from '@testing-library/react';
import ThemeToggler from './ThemeToggler.component';

describe('ThemeToggler component', () => {
  it('should render', () => {
    const mockSampleProp = 5;
    const textQuery = `ThemeToggler ${mockSampleProp}`;

    render(<ThemeToggler sampleProp={mockSampleProp} />);

    expect(screen.getByText(textQuery)).toBeInTheDocument();
  });
});
