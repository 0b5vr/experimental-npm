import { describe, expect, it } from 'vitest';
import { float32ArrayToWav } from '../float32ArrayToWav';

function readAsciiString(view: DataView, offset: number, length: number): string {
  let s = '';
  for (let i = 0; i < length; i++) {
    s += String.fromCharCode(view.getUint8(offset + i));
  }
  return s;
}

describe('float32ArrayToWav', () => {
  it('returns an ArrayBuffer of the expected byte length', () => {
    const src = [new Float32Array([1, 2, 3, 4])];
    const subject = float32ArrayToWav(src, 44100);

    expect(subject).toBeInstanceOf(ArrayBuffer);
    expect(subject.byteLength).toBe(44 + 4 * 4);
  });

  it('writes a valid RIFF/WAVE header for a mono signal', () => {
    const sampleRate = 44100;
    const src = [new Float32Array([0, 0])];
    const subject = float32ArrayToWav(src, sampleRate);
    const view = new DataView(subject);

    expect(readAsciiString(view, 0, 4)).toBe('RIFF');
    expect(view.getUint32(4, true)).toBe(subject.byteLength - 8);
    expect(readAsciiString(view, 8, 4)).toBe('WAVE');
    expect(readAsciiString(view, 12, 4)).toBe('fmt ');
    expect(view.getUint32(16, true)).toBe(16); // fmt chunk size
    expect(view.getUint16(20, true)).toBe(3); // format tag: IEEE float
    expect(view.getUint16(22, true)).toBe(1); // channels
    expect(view.getUint32(24, true)).toBe(sampleRate);
    expect(view.getUint32(28, true)).toBe(4 * 1 * sampleRate); // avg bytes per sec
    expect(view.getUint16(32, true)).toBe(4 * 1); // block align
    expect(view.getUint16(34, true)).toBe(32); // bits per sample
    expect(readAsciiString(view, 36, 4)).toBe('data');
    expect(view.getUint32(40, true)).toBe(4 * 1 * 2); // data chunk size
  });

  it('writes header fields correctly for a multi-channel signal', () => {
    const sampleRate = 48000;
    const src = [
      new Float32Array([0, 0, 0, 0]),
      new Float32Array([0, 0, 0, 0]),
      new Float32Array([0, 0, 0, 0]),
    ];
    const subject = float32ArrayToWav(src, sampleRate);
    const view = new DataView(subject);

    expect(view.getUint16(22, true)).toBe(3); // channels
    expect(view.getUint32(28, true)).toBe(4 * 3 * sampleRate); // avg bytes per sec
    expect(view.getUint16(32, true)).toBe(4 * 3); // block align
    expect(view.getUint32(40, true)).toBe(4 * 3 * 4); // data chunk size
  });

  it('interleaves sample data across multiple channels', () => {
    const left = new Float32Array([1, 0.5, -0.5]);
    const right = new Float32Array([-1, -0.5, 0.5]);
    const subject = float32ArrayToWav([left, right], 44100);

    const samples = new Float32Array(subject.slice(44));
    expect(samples).toEqual(new Float32Array([1, -1, 0.5, -0.5, -0.5, 0.5]));
  });
});
