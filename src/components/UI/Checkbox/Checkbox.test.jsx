import React from 'react';
import { render, screen, fireEvent } from "@testing-library/react";
import '@testing-library/jest-dom';
import { Checkbox } from './Checkbox'

describe(" Checkbox component", () => {
    it("checkbox1 checked", ()=> {
        render(<Checkbox name="checkbox1" checked={true} />);
        const checkbox = screen.getByTestId("checkbox1");
        expect(checkbox).toBeChecked();
    });

    it("checkbox3 with lable checked", ()=> {
        render(<Checkbox name="checkbox3" checked={true} label="Title" />);
        const checkbox = screen.getByText("Title");
        expect(checkbox).toBeInTheDocument();
    });

    it('checkbox1 should be unchecked after click', () => {
        const handleCheckboxChange = vi.fn();
    
        render(<Checkbox name="checkbox1" checked={true} onChange={handleCheckboxChange} />);
    
        const checkbox = screen.getByTestId("checkbox1");
        fireEvent.click(checkbox);
        expect(handleCheckboxChange).toHaveBeenCalledWith('checkbox1', false);
      });
})