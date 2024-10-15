import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Button } from './Button'

describe(" Button component", () => {
    it("renders the primary button", ()=> {
        render(<Button label="Submit" type="primary" />);
        const button = screen.getByTestId('button-primary');
        expect(button).toBeInTheDocument();
    });

    it("renders the secondary button", ()=> {
        render(<Button label="Submit" type="secondary" />);
        const button = screen.getByTestId('button-secondary');
        expect(button).toBeInTheDocument();
    });

    it('Primary button background color should be #00AE1C', () => {
        render(<Button label="Submit" type="primary" />);
        const button = screen.getByTestId('button-primary');
        expect(button).toHaveStyle('background-color: #00AE1C');
    });

    it('renders disabled button', () => {
        render(<Button label="Submit" type="primary" disabled />);
        const button = screen.getByTestId('button-primary');
        expect(button).toBeDisabled();
    });

    it('calls onClick handler when button is clicked', () => {
        const handleClick = vi.fn();
        render(<Button label="Submit" type="primary" onClick={handleClick} />);

        const button = screen.getByTestId('button-primary');
        fireEvent.click(button);
    
        expect(handleClick).toHaveBeenCalledTimes(1);
        
    });

    

      

})