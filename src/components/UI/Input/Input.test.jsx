import { render, screen, fireEvent } from '@testing-library/react';
import { InputField } from './Input'; 
import '@testing-library/jest-dom';

describe('InputField Component', () => {
  const mockOnChange = vi.fn(); 

  beforeEach(() => {
    mockOnChange.mockClear(); 
  });

  it('renders the input with label and placeholder', () => {
    render(
      <InputField
        label="Username"
        value=""
        placeholder="Enter your username"
        onChange={mockOnChange}
      />
    );

    expect(screen.getByText('Username')).toBeInTheDocument();
    const input = screen.getByPlaceholderText('Enter your username');
    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute('type', 'text');
  });

  it('calls onChange handler when input value changes', () => {
    render(
      <InputField
        label="Username"
        value=""
        placeholder="Enter your username"
        onChange={mockOnChange}
      />
    );

    const input = screen.getByPlaceholderText('Enter your username');
    fireEvent.change(input, { target: { value: 'New User' } });
    expect(mockOnChange).toHaveBeenCalledTimes(1);
    expect(mockOnChange).toHaveBeenCalledWith(expect.anything());
  });

  it('renders error message if error is passed', () => {
    render(
      <InputField
        label="Username"
        value=""
        placeholder="Enter your username"
        onChange={mockOnChange}
        error="This field is required"
      />
    );

    expect(screen.getByText('This field is required')).toBeInTheDocument();
  });

  it('renders the input as disabled', () => {
    render(
      <InputField
        label="Username"
        value=""
        placeholder="Enter your username"
        onChange={mockOnChange}
        disabled
      />
    );
    const input = screen.getByPlaceholderText('Enter your username');
    expect(input).toBeDisabled();
  });
});
