import styled from 'styled-components';

export const CheckboxWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  border: 0;
  clip: rect(0 0 0 0);
  clippath: inset(50%);
  height: 1px;
  width: 1px;
  margin: -1px;
  padding: 0;
  position: absolute;
  white-space: nowrap;
  overflow: hidden;

  /* Ensuring the hidden checkbox is clickable */
  z-index: 1;
  opacity: 0;
`;

export const StyledCheckbox = styled.div`
  display: inline-block;
  width: 16px;
  height: 16px;
  background: ${({ checked }) => (checked ? 'none' : 'white')};
  border-radius: 3px;
  transition: all 150ms;
  border: 1px solid ${({ checked }) => (checked ? 'green' : 'gray')};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer; /* Ensure the checkbox cursor indicates clickability */
`;

export const Label = styled.span`
  margin-left: 8px;
  font-size: 16px;
  cursor: pointer;
`;
