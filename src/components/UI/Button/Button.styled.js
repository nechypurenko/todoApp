import styled from 'styled-components';

export const StyledButton = styled.button`
padding: 10px 20px;
font-size: 16px;
cursor: pointer;
display: flex;
align-items: center;
justify-content: center;
border-radius: 8px;
border: none;
transition: background-color 0.3s ease;

background-color: ${({ type }) => 
    type === 'primary' ? '#00AE1C' : 
    type === 'secondary' ? '#FFFFFF' : 
    '#f0f0f0'};
color: ${({ type }) => 
  type === 'secondary' ? '#000' : '#fff'};
border: ${({ type }) => 
  type === 'secondary' ? '1px solid #DEDFE5' : '1px solid #00AE1C'};

&:hover {
  background-color: ${({ type }) => 
  type === 'primary' ? '#00AE1C' :
  type === 'secondary' ? '#EFEFEF' :
  '#ddd'
   };
  border: ${({ type, disabled })  => 
  !!disabled && type === 'primary' ? '1px solid #5CE171' :  '1px solid #DEDFE5' 
  };
}

&:active {
  background-color: ${({ type }) => 
  type === 'primary' ? '#0CD52B' :
  type === 'secondary' ? '#E0E0E0' :
    '#ccc'};
}

&:disabled {
  background-color: ${({ type }) => 
  type === 'primary' ? '#187727' : '#8D8E91'
   };
  color: ${({ type }) => 
  type === 'primary' ? '#B9B9B9' : '#737373'};
  cursor: not-allowed;
}
`;


