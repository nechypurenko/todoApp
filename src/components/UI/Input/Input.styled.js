import styled, { css } from 'styled-components';

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex:1;
`;


export const Label = styled.label`
margin-bottom: 5px;
font-size: 14px;
color: #1f3c6b;
font-weight: 500;
`;

export const InputWrapper = styled.div`
  position: relative;
`;

export const Input = styled.input`
  padding: 10px 20px 10px 0;
  font-size: 16px;
  border: none;
  color: ${({ disabled }) => (disabled ? '#737373' : '#323749')};
  outline: none;
  transition: border-color 0.3s ease;
  min-width:300px;
  width: 100%; 
  background: none;
  box-sizing: border-box;
  flex-grow: 1;

  &:focus {
    border-color: ${({ hasError }) => (hasError ? 'FF5620' : '#323749')};
    outline: none;
  }

  &::placeholder {
    color: #6b7280;
  }

  &:disabled {
    color: #737373;
    border-color: #737373;
    background-color: transparent;
  }
`;

export const ErrorMessage = styled.span`
  color: #d32f2f;
  font-size: 12px;
  margin-top: 4px;
  left: 0;
`;
