import { binarySearch, insertIntoArray, scheduleChecker } from '../helpers'
import moment from 'moment'

describe('test helpers functions', () => {
  it('test binarySearch', () => {
    let array = []
    expect(binarySearch(array, 4, 0, 0)).toBe(0)

    array = [1, 2, 3]
    expect(binarySearch(array, 2, 0, array.length)).toBe(1)
    expect(binarySearch(array, 1, 0, array.length)).toBe(1)
    expect(binarySearch(array, 3, 0, array.length)).toBe(2)

    array = [1, 2, 3, 5, 6]
    expect(binarySearch(array, 4, 0, array.length)).toBe(3)

    array = [1, 5, 9, 14]
    expect(binarySearch(array, 3, 0, array.length)).toBe(1)
    expect(binarySearch(array, 11, 0, array.length)).toBe(3)
    expect(binarySearch(array, 15, 0, array.length)).toBe(4)

    array = [5, 7, 8, 15]
    expect(binarySearch(array, 3, 0, array.length)).toBe(0)

    array = [1, 3, 4, 5, 6, 8, 9, 10, 11, 12, 14, 16]
    expect(binarySearch(array, 4, 0, array.length)).toBe(2)
    expect(binarySearch(array, 8, 0, array.length)).toBe(5)
    expect(binarySearch(array, 2, 0, array.length)).toBe(1)
    expect(binarySearch(array, 12, 0, array.length)).toBe(9)
    expect(binarySearch(array, 5, 0, array.length)).toBe(3)
    expect(binarySearch(array, 1, 0, array.length)).toBe(1)
    expect(binarySearch(array, 20, 0, array.length)).toBe(12)
  })

  it('test insertIntoArray', () => {
    let array = [1, 2, 3, 5, 6]
    let newArray = insertIntoArray(array, 3, 4)
    expect(newArray.length).toBe(6)
    expect(newArray[3]).toBe(4)

    array = [{ val: 1 }, { val: 2 }, { val: 4 }, { val: 5 }]
    newArray = insertIntoArray(array, 2, { val: 3 })
    expect(newArray.length).toBe(5)
    expect(newArray[2].val).toBe(3)
  })

  it('test search and insert', () => {
    let array = [1, 2, 3, 5, 6]
    let index = binarySearch(array, 4, 0, array.length)
    let newArray = insertIntoArray(array, index, 4)
    expect(newArray.length).toBe(6)
    expect(newArray[3]).toBe(4)

    array = [{ val: 1 }, { val: 2 }, { val: 4 }, { val: 5 }]
    const newValue = { val: 3 }
    index = binarySearch(array.map(({ val }) => val), newValue.val, 0, array.length)
    newArray = insertIntoArray(array, index, newValue)
    expect(newArray.length).toBe(5)
    expect(newArray[2].val).toBe(newValue.val)

    const anotherValue = { val: 6 }
    index = binarySearch(newArray.map(({ val }) => val), anotherValue.val, 0, newArray.length)
    newArray = insertIntoArray(newArray, index, anotherValue)
    expect(newArray.length).toBe(6)
    expect(newArray[5].val).toBe(anotherValue.val)
  })

  it('test scheduleChecker', () => {
    const appointments = [{ start: '1200', end: '1300' }, { start: '1540', end: '1710' }]
    let bookings = [{ start: '1320', end: '1400' }, { start: '1400', end: '1500' }]

    let slots = scheduleChecker(appointments, bookings)
    expect(slots.length).toBe(2)
    expect(slots[0].start).toBe('1320')
    expect(slots[0].end).toBe('1400')
    expect(slots[1].start).toBe('1400')
    expect(slots[1].end).toBe('1500')

    bookings = [{ start: '1220', end: '1400' }, { start: '1400', end: '1600' }]
    slots = scheduleChecker(appointments, bookings)
    expect(slots.length).toBe(0)

    bookings = [{ start: '1000', end: '1200' }, { start: '1500', end: '1600' }]
    slots = scheduleChecker(appointments, bookings)
    expect(slots.length).toBe(1)
    expect(slots[0].start).toBe('1000')
    expect(slots[0].end).toBe('1200')
  })
})
