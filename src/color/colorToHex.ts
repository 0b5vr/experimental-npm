import { saturate } from '../math/saturate';
import type { RawRGB } from './RawRGB';

/**
 * Converts the input {@link RawRGB} to hex representation (e.g. #7f7f7f)
 *
 * @param color - color in {@link RawRGB}
 * @returns Hex representation of the color
 */
export function colorToHex(color: RawRGB): string {
  const hexArray = color.map((v) =>
    Math.round(saturate(v) * 255.0)
      .toString(16)
      .padStart(2, '0'),
  );
  return `#${hexArray.join('')}`;
}
