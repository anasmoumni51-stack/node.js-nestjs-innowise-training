import { Todo, TodoStatus } from './types';

export function toggleAll(state: Todo[], completed: boolean): Todo[] {
  if (!state){
  throw new Error('toggleAll: not implemented');
  }
  return state.map(item => item ? {...item, status: TodoStatus.COMPLETED } : item )
}

export function clearCompleted(state: Todo[]): Todo[] {
  if (!state){
  throw new Error('clearCompleted: not implemented');
  }
  return state.filter(item => item.status !== TodoStatus.COMPLETED)
}

export function countByStatus(state: Todo[], status: TodoStatus): number {
  if (!state){
  throw new Error('countByStatus: not implemented');
  }
  return state.reduce( (total, todo) => todo.status === status ? total + 1 : total, 0 )

}
