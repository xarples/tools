import crypto from 'crypto'

/**
 * Encrypt a plain password.
 *
 * @param password - plain password
 *
 * @returns Returns a Promise with version hashed of the given password.
 *
 * @beta
 */

export default async function encrypt(password: string): Promise<string> {
  return crypto.createHash('sha256').update(password).digest('hex')
}
