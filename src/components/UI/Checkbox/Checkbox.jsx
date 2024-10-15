import React from 'react';
import * as styled from './Checkbox.styled';
import checkbox_checked from '../../../assets/img/checkbox_checked.svg';

export const Checkbox = ({ checked, onChange, name, label }) => {

  const handleCheckboxChange = () => {
    onChange(name, !checked);
  };

  return (
    <styled.CheckboxWrapper onClick={handleCheckboxChange}>
      <styled.HiddenCheckbox
        checked={checked}
        onChange={handleCheckboxChange}
        type="checkbox"
        data-testid={name}
        aria-checked={checked}
      />
      <styled.StyledCheckbox checked={checked}>
        {checked && <img src={checkbox_checked} alt="checked" />}
      </styled.StyledCheckbox>
      {label && <styled.Label>{label}</styled.Label>}
    </styled.CheckboxWrapper>
  );
};
