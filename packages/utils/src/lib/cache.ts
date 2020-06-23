import LRU, { Options } from 'lru-cache'

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

export default function cache<K, V>(options?: Options<K, V>) {
  return new LRU(options)
}
