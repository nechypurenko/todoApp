import styled from 'styled-components';

export const StyledIconWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  width: ${(props) => props.size}px;
  height: ${(props) => props.size}px;

  svg {
    width: 100%;
    height: 100%;
  }
`;
