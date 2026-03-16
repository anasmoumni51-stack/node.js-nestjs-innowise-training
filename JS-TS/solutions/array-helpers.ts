/* eslint-disable @typescript-eslint/no-unused-vars */
// Task 02: Mini functional–utility library
// All helpers are declared but not implemented.

export function mapArray<T, R>(source: readonly T[], mapper: (item: T, index: number) => R): R[] {
  if (source === null || source === undefined) { throw new Error('mapArray: not implemented'); }
const result : R[] = [];
for (let i= 0; i< source.length; i++){
  let src = source[i];
  const mapperFunctionResult = mapper(src, i);
  result.push(mapperFunctionResult);
}
return result;

}

export function filterArray<T>(source: readonly T[], predicate: (item: T, index: number) => boolean): T[] {
if (source === null || source === undefined) { throw new Error('filterArray: not implemented'); }
const result: T[] = [];
for (let i= 0; i< source.length; i++){
  let src = source[i];
  const isPredicate: boolean = predicate(src, i)
  if (!isPredicate) { continue };
  result.push(src)
  }
  return result;
}

export function reduceArray<T, R>(source: readonly T[], reducer: (acc: R, item: T, index: number) => R, initial: R): R {
 if (source === null || source === undefined) { throw new Error('reduceArray: not implemented') ;}
 let acc = initial
 for (let i= 0; i < source.length; i++){
  let src = source[i];
  acc = reducer(acc, src, i)
  }
  return acc;
}

export function partition<T>(source: readonly T[], predicate: (item: T) => boolean): [T[], T[]] {
if (source === null || source === undefined) { throw new Error('partition: not implemented'); }
let pass: T[] = []
let fail: T[] = []
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
         result[key] = []
    }
  result[key].push(item)
  }
return result;

}
