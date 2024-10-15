import { useMutation, useQueryClient } from 'react-query';
import { updateTodo } from '../../../api/todos';
    

export const useUpdateHook = () => {
    const queryClient = useQueryClient();
    return useMutation(updateTodo, {
        onMutate: async (updatedTodo) => {
            await queryClient.cancelQueries('todos');
    
            const previousTodos = queryClient.getQueryData('todos');
        
            queryClient.setQueryData('todos', (old) =>
                old.map((todo) => (todo.id === updatedTodo.id ? updatedTodo : todo))
            );
        
            return { previousTodos };
            },
            onError: (err, updatedTodo, context) => {
            queryClient.setQueryData('todos', context.previousTodos);
            },
            onSettled: () => {
            queryClient.invalidateQueries('todos');
            }
      });
}



  