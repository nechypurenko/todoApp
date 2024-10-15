import { useQuery } from 'react-query';
import { fetchTodos } from '../../../api/todos';

export const useFetchTodosHook = () =>{
    return useQuery('todos', fetchTodos);
}

