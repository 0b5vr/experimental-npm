import { int16ArrayToWav } from './int16ArrayToWav';
import { clamp } from './math';

/**
 * Convert given Float32Array to 16 bit wav format.
 *
 * @param src An array of Float32Array, each representing a channel.
 * @param sampleRate The output sample rate.
 * @returns An ArrayBuffer containing the wav data.
 */
export function float32ArrayToWav(src: Float32Array[], sampleRate: number): ArrayBuffer {
  const int16Src = new Array<Int16Array>(src.length);
  for (let iCh = 0; iCh < src.length; iCh++) {
    const channel = src[iCh];
    const out = new Int16Array(channel.length);
    for (let i = 0; i < channel.length; i++) {
      const x = channel[i];
      out[i] = clamp(x * 32767, -32767, 32767);
    }
    int16Src[iCh] = out;
  }

  return int16ArrayToWav(int16Src, sampleRate);
}
