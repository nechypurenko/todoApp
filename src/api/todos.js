import axios from 'axios';

const API_URL = 'http://localhost:3000/todos';

export const fetchTodos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const addTodo = async (newTodo) => {
  const response = await axios.post(API_URL, newTodo);
  return response.data;
};

export const updateTodo = async (updatedTodo) => {
  const response = await axios.put(`${API_URL}/${updatedTodo.id}`, updatedTodo);
  return response.data;
};

export const deleteTodo = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};
