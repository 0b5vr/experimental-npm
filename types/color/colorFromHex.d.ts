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
export declare function colorFromHex(hex: number | string): RawRGB;
