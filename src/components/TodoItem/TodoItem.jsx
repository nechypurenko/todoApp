import React, { useState } from 'react';
import * as icons from '../UI/Icons/icons'
import * as styled from './TodoItem.styled'
import { Checkbox } from '../UI/Checkbox';
import { InputField } from '../UI/Input'
import { Button } from '../UI/Button';

export const TodoItem = ({task, onEdit, onDelete}) => {
    const [editText, setEditText] = useState(task.description);
    const [isEditing, setIsEditing] = useState(false);
    // const [isCompleted, setIsCompleted] = useState(task.completed);

    const handleEditChange = (e) => {
        setEditText(e.target.value);
      };
      const handleEditSubmit = () => {
        setIsEditing(false);
        onEdit({ ...task, description: editText });
      };
    
    const handleDelete = () => {
        onDelete(task)
    };

    const handleCheckboxChange = () => {
        // setIsCompleted(!isCompleted)
        onEdit({ ...task, completed: !task.completed });
    };

    return (
        <styled.TodoItemWrapper >
            <Checkbox 
                checked={task.completed}
                onChange={handleCheckboxChange}
                name="todo_checkbox"/>
            {isEditing ? (
                <InputField value={editText} onChange={handleEditChange} onBlur={handleEditSubmit} />
            ) : (
                <styled.TaskText isCompleted={task.completed}>{task.description}</styled.TaskText>
            )}
            {isEditing ? (
        <styled.IconBtn onClick={handleEditSubmit}>
          <icons.ApplyIcon />
        </styled.IconBtn>
      ) : (
        <styled.BtnWrapper>
          {task.completed ? (
            <styled.IconBtn className="icon-btn" onClick={handleDelete}>
              <icons.DeleteIcon />
            </styled.IconBtn>
          ) : (
            <>
              <styled.IconBtn className="icon-btn" onClick={() => setIsEditing(true)}>
                <icons.EditIcon />
              </styled.IconBtn>
              <styled.IconBtn className="icon-btn" onClick={handleDelete}>
                <icons.DeleteIcon />
              </styled.IconBtn>
            </>
          )}
        </styled.BtnWrapper>
      )}
            
    </styled.TodoItemWrapper>
    );
} 