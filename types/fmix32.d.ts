/**
 * The finalization mix function used in MurmurHash3 to avalanche the bits of a hash to finalize it.
 * Useful for generating a nice-looking hash from a simple integer sequence.
 *
 * @param h - the hash to finalize
 * @returns the finalized hash
 */
export declare function fmix32(h: number): number;
