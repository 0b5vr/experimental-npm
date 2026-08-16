import type { RawRGB } from './RawRGB';

/**
 * Converts the input hex color to {@link RawRGB}.
 *
 * Supported formats:
 * - `#RRGGBB`
 * - `#RGB`
 * - `0xRRGGBB`
 *
 * @param hex - Hex representation of the color
 * @returns Color in {@link RawRGB}
 */
export function colorFromHex(hex: number | string): RawRGB {
  if (typeof hex === 'number') {
    hex = hex.toString(16).padStart(6, '0');
  }

  if (hex.startsWith('#')) {
    hex = hex.slice(1);
  }

  if (hex.length === 6) {
    const r = parseInt(hex.slice(0, 2), 16) / 255.0;
    const g = parseInt(hex.slice(2, 4), 16) / 255.0;
    const b = parseInt(hex.slice(4, 6), 16) / 255.0;
    return [r, g, b];
  } else if (hex.length === 3) {
    const r = parseInt(hex[0] + hex[0], 16) / 255.0;
    const g = parseInt(hex[1] + hex[1], 16) / 255.0;
    const b = parseInt(hex[2] + hex[2], 16) / 255.0;
    return [r, g, b];
  } else {
    throw new Error(`Invalid hex color: ${hex}`);
  }
}
