import type { RawMatrix3 } from '../mat3/RawMatrix3';
import type { RawVector3 } from './RawVector3';
/**
 * Apply a 3x3 matrix to a vec3.
 */
export declare function vec3ApplyMatrix3(v: RawVector3, m: RawMatrix3): RawVector3;
