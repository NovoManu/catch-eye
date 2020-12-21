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

export const insertIntoArray = (array: never[], index: number, value: never): never[] => {
  const start = array.slice(0, index)
  const end = array.slice(index, array.length)
  return [...start, value, ...end]
}

interface Timeslot {
  start: string
  end: string
}

export const scheduleChecker = (appointments: Timeslot[], bookings: Timeslot[]): Timeslot[] => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
  // @ts-ignore
  return bookings.reduce((acc: Timeslot[], booking: Timeslot) => {
    const book = appointments.find(appointment => {
      if (
        (booking.start > appointment.start && booking.start < appointment.end) ||
        (booking.end > appointment.start && booking.end < appointment.end)
      ) {
        return booking
      }
    })
    if (!book) {
      acc.push(booking)
    }
    return acc
  }, [])
}

// from datetime import datetime
// appointments = [
//   (datetime(2012, 5, 22, 10), datetime(2012, 5, 22, 10, 30)),
//   (datetime(2012, 5, 22, 12), datetime(2012, 5, 22, 12, 30)),
//   (datetime(2012, 5, 22, 15, 00), datetime(2012, 5, 22, 15, 30))]
// booking_requests = [
//   (datetime(2012, 5, 22, 10, 45), datetime(2012, 5, 22, 11, 00)),
//   (datetime(2012, 5, 22, 11, 45), datetime(2012, 5, 22, 12, 45)),]
// def schedule_checker(appointments, booking_requests):
// """
// Checks which booking requests in `booking_requests` is available
// given the list of already booking appointments in `appointments`
// :param appointments: list of tuples of datetime objects signifying
// the start and end datetimes of the appointments
// e.g.
//   appointments = [
//   (datetime(2012, 5, 22, 10), datetime(2012, 5, 22, 10, 30)),
//   (datetime(2012, 5, 22, 12), datetime(2012, 5, 22, 12, 30)),
//   (datetime(2012, 5, 22, 15, 00), datetime(2012, 5, 22, 15, 30))]
// :param booking_requests: list of tuples of datetime objects signifying
// the start and end datetimes of the booking requests
//   :returns: a subset of `booking_requests` that are approved booking requests.
//   a booking request is approved if it does not conflict with any appointment
// in `appointments`
// """
// print(schedule_checker(appointments, booking_requests))from datetime import datetime
