import expect from './expect'
import Logger from './logging'

import { APIKEY, ENDPOINT } from './env'
import { RadarrClient } from '../src/RadarrClient'

describe('when using the CalendarResource class', () => {
  const sut = new RadarrClient(ENDPOINT, APIKEY, Logger.extend('calendar-resource'))

  it('should list calendar events', () => {
    expect(sut.calendar.list()).to.eventually.be.empty
  })

  it('should list releases on start date', () => {
    const promise = sut.calendar.list('12/13/2010')
    expect(promise).to.not.eventually.be.empty
  })

  it('should list releases between dates', () => {
    const promise = sut.calendar.list('12/12/2010', '12/14/2010')
    expect(promise).to.not.eventually.be.empty
  })
})