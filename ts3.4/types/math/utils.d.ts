/**
 * `lerp`, or `mix`.
 * Return a linear interpolation of two numbers.
 * The {@link t} won't be clamped.
 *
 * @param a - A number
 * @param b - Another number
 * @param t - A number interpolating two numbers. Usually in range [0, 1] but not clamped
 */
export declare function lerp(a: number, b: number, t: number): number;
/**
 * `clamp`
 */
export declare function clamp(x: number, l: number, h: number): number;
/**
 * `clamp( x, 0.0, 1.0 )`
 */
export declare function saturate(x: number): number;
/**
 * Transform a value from input range to output range.
 */
export declare function range(x: number, x0: number, x1: number, y0: number, y1: number): number;
/**
 * `smoothstep` but not smooth
 */
export declare function linearstep(a: number, b: number, x: number): number;
/**
 * world famous `smoothstep` function
 */
export declare function smoothstep(a: number, b: number, x: number): number;
/**
 * `smoothstep` but more smooth
 */
export declare function smootherstep(a: number, b: number, x: number): number;
/**
 * `smoothstep` but WAY more smooth
 */
export declare function smootheststep(a: number, b: number, x: number): number;
