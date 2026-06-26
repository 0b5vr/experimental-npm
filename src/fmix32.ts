/**
 * The finalization mix function used in MurmurHash3 to avalanche the bits of a hash to finalize it.
 * Useful for generating a nice-looking hash from a simple integer sequence.
 *
 * @param h - the hash to finalize
 * @returns the finalized hash
 */
export function fmix32(h: number): number {
  h ^= h >>> 16;
  h = Math.imul(h, 0x85ebca6b);
  h ^= h >>> 13;
  h = Math.imul(h, 0xc2b2ae35);
  h ^= h >>> 16;

  return h >>> 0;
}
