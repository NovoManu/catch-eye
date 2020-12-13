import { Result } from '@/types'
import { binarySearch, insertIntoArray } from '@/common/helpers.ts'

const key = 'CatchEyeResults'

export const getLocalData = (): Result[] => {
  const results: string = localStorage.getItem(key) as string
  return results ? JSON.parse(results) : []
}

export const saveLocalData = (result: Result): void => {
  const results: Result[] = getLocalData()
  const index: number = binarySearch(results.map(({ score }) => +score), +result.score, 0, results.length)
  const newResults: Result[] = insertIntoArray(results, index, result)
  console.log(results, newResults)
  localStorage.setItem(key, JSON.stringify(newResults))
}

export const destroyLocalData = (): void => {
  localStorage.removeItem(key)
}

export default { getLocalData, saveLocalData, destroyLocalData }
