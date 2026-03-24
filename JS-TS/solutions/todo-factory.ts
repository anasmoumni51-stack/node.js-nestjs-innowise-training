import { Todo, NewTodo, TodoStatus } from './types';

let nextId = 1;

//export function createTodo(input: { title: string }): Todo;
//export function createTodo(input: { title: string; description: string }): Todo;

export function createTodo(input: Partial<NewTodo>): Todo {
  if (!input || !input.title) {
    throw new Error('createTodo: not implemented');
  }

  return {
    id: nextId++,
    title: input.title,
    description: input.description ?? "",
    status: input.status ?? TodoStatus.PENDING,
    createdAt: new Date(),
  };
}