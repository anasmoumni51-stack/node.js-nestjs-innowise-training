import { Todo } from './types';

export function addTodo(state: Todo[], todo: Todo): Todo[] {
  if (!todo || !state ) { 
      throw new Error('addTodo: not implemented'); 
  }
  return [...state, todo];
}

export function updateTodo(state: Todo[], id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Todo[] {
  let todo = state.find(todo => todo.id === id );
  if (!todo) { 
    throw new Error('updateTodo: not implemented'); 
  }
  return state.map(todo => todo.id === id ? { ...todo, ...update } : todo )
}

export function removeTodo(state: Todo[], id: number): Todo[] {
  let todo = state.find(todo => todo.id === id );
  if (!todo) { 
  throw new Error('removeTodo: not implemented');
  }
  return state.filter(todo => todo.id !== id)
}

export function getTodo(state: Todo[], id: number): Todo | undefined {
  if (!id || !state) {
    throw new Error('getTodo: not implemented');
  }
  let todo = state.find(todo => todo.id === id );
  if (!todo) { 
  return undefined;
  }
  return todo;
}
