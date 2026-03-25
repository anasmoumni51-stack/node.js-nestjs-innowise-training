export class InMemoryRepository<T extends { id: number }> {
  
  private items: T[] = [];

  add(entity: T): T {
    if (!this.items) {
    throw new Error('add: not implemented');
    }
    this.items = [...this.items, entity]
    return entity;
  }

  update(id: number, patch: Partial<T>): T {
    let index = this.items.findIndex(item => item.id === id)
    if (index < 0) {
    throw new Error('update: not implemented');
    }
    this.items = this.items.map(item => item.id === id ? {...item, ...patch } : item )
    return this.items[index]
  }

  remove(id: number): void {
    if(!this.items || this.items.length <= 0) {
    throw new Error('remove: not implemented');
    }
    this.items = this.items.filter(item => item.id !== id)
  }

  findById(id: number): T | undefined {
    if(!this.items) {
    throw new Error('findById: not implemented');
    }
     let result = this.items.find(item => item.id === id)
     if (result) return result;
     else {
      return undefined;
     }
  }

  findAll(): T[] {
    if(!this.items) {
    throw new Error('findAll: not implemented'); 
    }
    return [...this.items]
  }
}