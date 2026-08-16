import { describe, expect, it } from 'vitest';
import { int16ArrayToWav } from '../int16ArrayToWav';

function readAsciiString(view: DataView, offset: number, length: number): string {
  let s = '';
  for (let i = 0; i < length; i++) {
    s += String.fromCharCode(view.getUint8(offset + i));
  }
  return s;
}

describe('int16ArrayToWav', () => {
  it('returns an ArrayBuffer of the expected byte length', () => {
    const src = [new Int16Array([1, 2, 3, 4])];
    const subject = int16ArrayToWav(src, 44100);

    expect(subject).toBeInstanceOf(ArrayBuffer);
    expect(subject.byteLength).toBe(44 + 4 * 2);
  });

  it('writes a valid RIFF/WAVE header for a mono signal', () => {
    const sampleRate = 44100;
    const src = [new Int16Array([0, 0])];
    const subject = int16ArrayToWav(src, sampleRate);
    const view = new DataView(subject);

    expect(readAsciiString(view, 0, 4)).toBe('RIFF');
    expect(view.getUint32(4, true)).toBe(subject.byteLength - 8);
    expect(readAsciiString(view, 8, 4)).toBe('WAVE');
    expect(readAsciiString(view, 12, 4)).toBe('fmt ');
    expect(view.getUint32(16, true)).toBe(16); // fmt chunk size
    expect(view.getUint16(20, true)).toBe(1); // format tag: PCM
    expect(view.getUint16(22, true)).toBe(1); // channels
    expect(view.getUint32(24, true)).toBe(sampleRate);
    expect(view.getUint32(28, true)).toBe(2 * 1 * sampleRate); // avg bytes per sec
    expect(view.getUint16(32, true)).toBe(2 * 1); // block align
    expect(view.getUint16(34, true)).toBe(16); // bits per sample
    expect(readAsciiString(view, 36, 4)).toBe('data');
    expect(view.getUint32(40, true)).toBe(2 * 1 * 2); // data chunk size
  });

  it('writes header fields correctly for a multi-channel signal', () => {
    const sampleRate = 48000;
    const src = [
      new Int16Array([0, 0, 0, 0]),
      new Int16Array([0, 0, 0, 0]),
      new Int16Array([0, 0, 0, 0]),
    ];
    const subject = int16ArrayToWav(src, sampleRate);
    const view = new DataView(subject);

    expect(view.getUint16(22, true)).toBe(3); // channels
    expect(view.getUint32(28, true)).toBe(2 * 3 * sampleRate); // avg bytes per sec
    expect(view.getUint16(32, true)).toBe(2 * 3); // block align
    expect(view.getUint32(40, true)).toBe(2 * 3 * 4); // data chunk size
  });

  it('interleaves sample data across multiple channels', () => {
    const left = new Int16Array([1, 2, 3]);
    const right = new Int16Array([-1, -2, -3]);
    const subject = int16ArrayToWav([left, right], 44100);

    const samples = new Int16Array(subject.slice(44));
    expect(samples).toEqual(new Int16Array([1, -1, 2, -2, 3, -3]));
  });
});
