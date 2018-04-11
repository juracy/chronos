import { timerReducer, initialState } from './timer.reducer'

describe('Timer Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any
      const result = timerReducer(initialState, action)

      expect(result).toBe(initialState)
    })
  })
})
