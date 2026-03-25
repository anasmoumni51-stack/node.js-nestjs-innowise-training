export class InMemoryRepository<T extends { id: number }> {
  // private storage
  // Implementation plan:
  // 1) add: push entity into items and return it.
  // 2) update: find by id, merge patch, replace in array, return updated entity.
  // 3) remove: delete matching item from items.
  // 4) findById: return first match or undefined.
  // 5) findAll: return a shallow copy to protect internal state.
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




//   add(entity: T): T {
//     this.items = [...this.items, entity];
//     return entity;
//   }

//   update(id: number, patch: Partial<T>): T {
//     const index = this.items.findIndex((item) => item.id === id);
//     if (index === -1) {
//       throw new Error(`Entity with id ${id} not found`);
//     }

//     const updated = { ...this.items[index], ...patch };
//     this.items[index] = updated;
//     return updated;
//   }

//   remove(id: number): void {
//     const exists = this.items.some((item) => item.id === id);
//     if (!exists) {
//       throw new Error(`Entity with id ${id} not found`);
//     }

//     this.items = this.items.filter((item) => item.id !== id);
//   }

//   findById(id: number): T | undefined {
//     return this.items.find((item) => item.id === id);
//   }

//   findAll(): T[] {
//     return [...this.items];
//   }
// }