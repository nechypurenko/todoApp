import { useMutation, useQueryClient } from 'react-query';
import { deleteTodo } from '../../../api/todos';

export const useDeleteTodoHook = () => {
    const queryClient = useQueryClient();
    return useMutation(deleteTodo, {
        onMutate: async (id) => {
          await queryClient.cancelQueries('todos');
    
          const previousTodos = queryClient.getQueryData('todos');
    
          queryClient.setQueryData('todos', (old) => old.filter((todo) => todo.id !== id));
    
          return { previousTodos };
        },
        onError: (err, id, context) => {
          queryClient.setQueryData('todos', context.previousTodos);
        },
        onSettled: () => {
          queryClient.invalidateQueries('todos');
        }
      });
}
    