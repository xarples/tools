import crypto from 'crypto'

/**
 * Encrypt a plain password.
 * @remarks
 *
 * The `draw` member implements the main rendering for a widget.
 *
 * @param password - plain password
 * @returns Promise<string>, Returns a Promise with version hashed of the given password.
 *
 * @beta @virtual
 */
export default async function encrypt(password: string) {
  return crypto.createHash('sha256').update(password).digest('hex')
}
