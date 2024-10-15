import React, { useState, useCallback } from 'react';
import * as styled from './TodoView.styled'
import * as icons from '../UI/Icons/icons'
import { TodoItem } from "../TodoItem";
import { InputField } from '../UI/Input'
import { Button } from '../UI/Button';
import * as todosHooks from './hooks'

export const TodoView = () => {
    const [newTask, setNewTask] = useState('');
    const { data: todos, isLoading, isError } = todosHooks.useFetchTodosHook();
    const addMutation = todosHooks.useAddTodosHook();
    const updateMutation = todosHooks.useUpdateHook();
    const deleteMutation = todosHooks.useDeleteTodoHook();
    
    
    const handleAddTodo = useCallback(() => {
        addMutation.mutate({ description: newTask, completed: false });
        setNewTask('');
    }, [newTask, addMutation]);

    const handleUpdateTodo = useCallback((todo) => {
        updateMutation.mutate(todo);
    }, [updateMutation]);

    const handleDeleteTodo = useCallback((id) => {
        deleteMutation.mutate(id);
    }, [deleteMutation]);
    
    const handleInputChange = useCallback((e) => {
        setNewTask(e.target.value);
    }, [newTask]);
    if (isLoading) return <p>Loading...</p>;
    if (isError) return <p>Error fetching todos</p>;

    console.log("todos = ", todos)
    return (
        <styled.Container>
            <styled.ToDoContainer>
                <styled.AddTaskWrapper>
                    <InputField
                        type="text"
                        value={newTask}
                        onChange={(e) => handleInputChange(e)}
                        placeholder="Type here to add a task..."/>
                    <Button 
                        type="primary" 
                        label="Add" 
                        icon={icons.AddIcon} 
                        onClick={handleAddTodo} />
                </styled.AddTaskWrapper>
                {todos.map((item) => (
                    <TodoItem 
                    task={item}
                    onEdit={handleUpdateTodo}
                    onDelete={handleDeleteTodo} />
                ))}
                
            </styled.ToDoContainer>
        </styled.Container>
    )
}