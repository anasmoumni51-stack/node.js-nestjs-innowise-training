/* eslint-disable @typescript-eslint/no-unused-vars */
// Task 02: Mini functional–utility library
// All helpers are declared but not implemented.

export function mapArray<T, R>(source: readonly T[], mapper: (item: T, index: number) => R): R[] {
  //let result : R[] = [];
  if (source === null || source === undefined) { 
      throw new Error('mapArray: not implemented'); 
  }

  // for (let i= 0; i < source.length; i++){
  //   let item = source[i];
  //   result.push(mapper(item, i));
  // }

let result: R[]  = source.map( item => mapper(item, source.indexOf(item)) )

return result;

}


export function filterArray<T>(source: readonly T[], predicate: (item: T, index: number) => boolean): T[] {

const result: T[] = [];

  if (source === null || source === undefined) { 
  throw new Error('filterArray: not implemented'); 
  }


  for (let i= 0; i< source.length; i++){
  let item = source[i];

  const isPredicate: boolean = predicate(item, i)
    
    if (!isPredicate) {
      continue 
    };

  result.push(item)
  }

  return result;
}



export function reduceArray<T, R>(source: readonly T[], reducer: (acc: R, item: T, index: number) => R, initial: R): R {
 let acc = initial
    if (source === null || source === undefined) {
      throw new Error('reduceArray: not implemented') ;
    }
 
    for (let i= 0; i < source.length; i++){
      let item = source[i];
      acc = reducer(acc, item, i)
    }

  return acc;
}



export function partition<T>(source: readonly T[], predicate: (item: T) => boolean): [T[], T[]] {

let pass: T[] = []
let fail: T[] = []

  if (source === null || source === undefined) { 
    throw new Error('partition: not implemented'); 
  }

  for (let item of source ){
    if (predicate(item)){
      pass.push(item)
    } else {
    fail.push(item)
    }
  }
  const tuple: [T[], T[]] = [pass, fail]
  return tuple;
}



export function groupBy<T, K extends PropertyKey>(source: readonly T[], keySelector: (item: T) => K): Record<K, T[]> {
if (source === null || source === undefined) { 
  throw new Error('groupBy: not implemented'); 
}
let result= {} as Record<K, T[]>;
  for (let item of source ){
    const key = keySelector(item);
    if (!result[key]) {
         result[key] = [];
    }
  result[key].push(item);
  }
return result;

}
