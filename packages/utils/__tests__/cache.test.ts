import cache from '../src/lib/cache'

describe('cache', () => {
  test('Should cache a value', async () => {
    const value = 'test'
    const testCache = cache<string, string>()

    testCache.set('name', value)

    expect(testCache.get('name')).toBe(value)
  })
})
