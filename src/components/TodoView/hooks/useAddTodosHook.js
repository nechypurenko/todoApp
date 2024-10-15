import { useMutation, useQueryClient } from 'react-query';
import { addTodo } from '../../../api/todos';

export const useAddTodosHook = ()=>{
    const queryClient = useQueryClient();
    
    return useMutation(addTodo, {
        onMutate: async (newTodo) => {
          await queryClient.cancelQueries('todos');
    
          const previousTodos = queryClient.getQueryData('todos');
    
          queryClient.setQueryData('todos', (old) => [...old, newTodo]);
          console.log("prev todo = ", previousTodos)
          return { previousTodos };
        },
        onError: (err, newTodo, context) => {
          queryClient.setQueryData('todos', context.previousTodos);
        },
        onSettled: () => {
          queryClient.invalidateQueries('todos');
        }
      });
}