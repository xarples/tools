import encrypt from '../src/lib/encrypt'

describe('terminate', () => {
  test('Should encrypt a password', async () => {
    const plain = 'the_best_password'
    const hashed = await encrypt(plain)

    expect(hashed).toBe(await encrypt(plain))
  })
})
