/**
 * Convert given Float32Array to 32 bit float wav format.
 *
 * @param src An array of Float32Array, each representing a channel.
 * @param sampleRate The output sample rate.
 * @returns An ArrayBuffer containing the wav data.
 */
export function float32ArrayToWav(
  src: Float32Array[],
  sampleRate: number,
): ArrayBuffer {
  const channels = src.length;
  const samples = src[0].length;
  const byteLength = channels * samples * 4 + 44;
  const array = new Uint8Array(byteLength);
  const view = new DataView(array.buffer);

  let head = 0;

  // 'RIFF'
  array[head++] = 0x52;
  array[head++] = 0x49;
  array[head++] = 0x46;
  array[head++] = 0x46;

  // chunk size
  const riffChunkSize = byteLength - 8;
  array[head++] = riffChunkSize & 255;
  array[head++] = (riffChunkSize >> 8) & 255;
  array[head++] = (riffChunkSize >> 16) & 255;
  array[head++] = (riffChunkSize >> 24) & 255;

  // 'WAVE'
  array[head++] = 0x57;
  array[head++] = 0x41;
  array[head++] = 0x56;
  array[head++] = 0x45;

  // 'fmt '
  array[head++] = 0x66;
  array[head++] = 0x6d;
  array[head++] = 0x74;
  array[head++] = 0x20;

  // chunk size
  array[head++] = 16;
  array[head++] = 0;
  array[head++] = 0;
  array[head++] = 0;

  // format tag: IEEE float
  array[head++] = 3;
  array[head++] = 0;

  // channels
  array[head++] = channels;
  array[head++] = 0;

  // samples per sec
  array[head++] = sampleRate & 255;
  array[head++] = (sampleRate >> 8) & 255;
  array[head++] = (sampleRate >> 16) & 255;
  array[head++] = (sampleRate >> 24) & 255;

  // avg bytes per sec
  const avgBytesPerSec = 4 * channels * sampleRate;
  array[head++] = avgBytesPerSec & 255;
  array[head++] = (avgBytesPerSec >> 8) & 255;
  array[head++] = (avgBytesPerSec >> 16) & 255;
  array[head++] = (avgBytesPerSec >> 24) & 255;

  // block align
  array[head++] = 4 * channels;
  array[head++] = 0;

  // bits per sample
  array[head++] = 32;
  array[head++] = 0;

  // 'data'
  array[head++] = 0x64;
  array[head++] = 0x61;
  array[head++] = 0x74;
  array[head++] = 0x61;

  // chunk size
  const dataChunkSize = 4 * channels * samples;
  array[head++] = dataChunkSize & 255;
  array[head++] = (dataChunkSize >> 8) & 255;
  array[head++] = (dataChunkSize >> 16) & 255;
  array[head++] = (dataChunkSize >> 24) & 255;

  // data
  for (let iSample = 0; iSample < samples; iSample++) {
    for (let iCh = 0; iCh < channels; iCh++) {
      view.setFloat32(head, src[iCh][iSample], true);
      head += 4;
    }
  }

  return array.buffer;
}
