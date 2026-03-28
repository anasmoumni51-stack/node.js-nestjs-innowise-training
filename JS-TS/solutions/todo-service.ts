import { TodoApi } from './todo-api';
import { Todo, TodoStatus } from './types';

export class TodoService {
  constructor(private readonly api: TodoApi) { }


  async create(title: string, description = ''): Promise<Todo> {
    try{
    if (!title.trim()) {
    throw new Error('title is required')
    }
    let result = await this.api.add({ title, description })
    return result;
    } catch (error) {
      console.log("function error", error);
      throw new Error('create: not implemented');
    }
  }


  async toggleStatus(id: number): Promise<Todo> {
    try {
      let items = await this.api.getAll()
      let index = items.findIndex(item => item.id === id)
      if (index < 0) {
        throw new Error('toggleStatus: not implemented')
      }
      return await this.api.update(id, { status: TodoStatus.COMPLETED })
    } catch (error) {
      console.log("function error", error);
     throw new Error('toggleStatus: not implemented');
    }
    
  }

 
  async search(keyword: string): Promise<Todo[]> {
    try {
      if(!keyword.trim() || keyword.length === 0) {
        throw new Error("search keyword is required")
      }
      let items = await this.api.getAll()
      let searchKeyword = keyword.toLowerCase()
      return items.filter(item => item.title.toLowerCase().includes(searchKeyword));
    } catch (error) {
      console.log("function error", error);
      throw new Error('search: not implemented');
    }
    
  }
}
