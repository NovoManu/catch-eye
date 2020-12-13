import { Result } from '@/types'

export const binarySearch = (array: number[], number: number, start: number, end: number): number => {
  if (array.length && array[0] > number) return 0
  if (array[array.length] < number) return array.length
  const middle = start + (end - start) / 2
  const floor = Math.floor(middle)
  const ceil = Math.ceil(middle)
  if (start >= end - 1) return ceil
  if (array[floor] === number) return floor
  else if (array[floor] < number && array[ceil] > number) return ceil
  else if (array[ceil] === number) return ceil
  if (array[floor] > number) return binarySearch(array, number, start, floor)
  if (array[ceil] < number) return binarySearch(array, number, ceil, end)
  return 0
}

export const insertIntoArray = (array: any[], index: number, value: any): any[] => {
  const start = array.slice(0, index)
  const end = array.slice(index, array.length)
  return [...start, value, ...end]
}
