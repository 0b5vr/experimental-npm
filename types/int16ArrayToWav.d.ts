/**
 * Convert given Int16Array to 16 bit wav format.
 *
 * @param src An array of Int16Array, each representing a channel.
 * @param sampleRate The output sample rate.
 * @returns An ArrayBuffer containing the wav data.
 */
export declare function int16ArrayToWav(src: Int16Array[], sampleRate: number): ArrayBuffer;
