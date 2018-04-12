import { FormatTimerPipe } from './format-timer.pipe'

describe('FormatTimerPipe', () => {
  let pipe: FormatTimerPipe

  beforeEach(() =>
    pipe = new FormatTimerPipe()
  )

  it('create an instance', () => {
    expect(pipe).toBeTruthy()
  })

  it('format tics', () => {
    expect(pipe.transform(0)).toEqual('00:00')
    expect(pipe.transform(60)).toEqual('01:00')
    expect(pipe.transform(122)).toEqual('02:02')
  })
})
