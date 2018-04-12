import { configReducer, initialState } from './config.reducer'

describe('Config Reducer', () => {
  describe('unknown action', () => {
    it('should return the initial state', () => {
      const action = {} as any
      const result = configReducer(initialState, action)

      expect(result).toBe(initialState)
    })
  })
})
