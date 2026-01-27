/**
 * Convert given Float32Array to 16 bit wav format.
 *
 * @param src An array of Float32Array, each representing a channel.
 * @param sampleRate The output sample rate.
 * @returns An ArrayBuffer containing the wav data.
 */
export declare function float32ArrayToWav(src: Float32Array[], sampleRate: number): ArrayBuffer;
