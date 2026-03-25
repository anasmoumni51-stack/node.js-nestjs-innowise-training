import { InMemoryRepository } from './repository';
import { Todo, NewTodo, TodoStatus } from './types';

export class TodoApi {
  private repo = new InMemoryRepository<Todo>();

  async getAll(): Promise<Todo[]> {
    try {
    let result = new Promise<Todo[]> ( (resolve, reject) => setTimeout( () => resolve(this.repo.findAll()) ,2) )
    return result;
    } catch (err) {
      throw new Error('getAll: not implemented');
    }
  }


  async add(newTodo: NewTodo): Promise<Todo> {
    try {
      let result = new Promise<Todo>((resolve, reject) => { 
        setTimeout( () => {
        const todo: Todo = {
          ...newTodo,
          id : this.repo.findAll().length,
          description: newTodo.description ?? "",
          status: newTodo.status ?? TodoStatus.PENDING,
          createdAt: new Date(),
         }
        resolve(this.repo.add(todo)); 
      }, 2);
    });
    return result;
    
    } catch (error) {
    throw new Error('add: not implemented'); 
    }
  }


  async update(id: number, update: Partial<Omit<Todo, 'id' | 'createdAt'>>): Promise<Todo> {
    try {
        let result = new Promise<Todo>( (resolve, reject) => setTimeout(() => {
          resolve(this.repo.update(id, update))
        }, 2) );
        return result;
    } catch (error) {
    throw new Error('update: not implemented');
    }
  }

  async remove(id: number): Promise<void> {

    try {
      let result = new Promise((resolve) => setTimeout(() => {
        resolve(this.repo.remove(id))
        return result;
      }, 2));
      
    } catch (error) {
      throw new Error('remove: not implemented');
    }
  }
}
