import styled from 'styled-components';

export const BtnWrapper = styled.div`
  display: flex;
  align-items: center;

  button {
    // opacity: 0;
    // visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s;
  }
`;

export const IconBtn = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
  margin-left: 10px;
  color: #6c757d;
  transition: color 0.3s;

  &:hover {
    color: #007bff;
  }
`;

export const TodoItemWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0;
  border-radius: 8px;
  background-color: #f8f9fa;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.1);
  gap: 1em;
  position: relative;  /* Ensure proper relative positioning */

  &:hover {
    background-color: #f0f0f0;

  }
`;

export const TaskText = styled.span`
  flex-grow: 1;
  font-size: 16px;
  color: ${({ isCompleted }) => (isCompleted ? '#a5a5a5' : '#333')};
  text-decoration: ${({ isCompleted }) => (isCompleted ? 'line-through' : 'none')};
`;
