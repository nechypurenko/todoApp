import PropTypes from 'prop-types';
import * as styled from './Input.styled';

export const InputField = ({
  value,
  placeholder,
  onChange,
  type = 'text',
}) => {
  return (
    <styled.InputContainer>
      <styled.Input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
      />
    </styled.InputContainer>
  );
};