import type { RawMatrix4 } from '../mat4/RawMatrix4';
import type { RawVector3 } from './RawVector3';
/**
 * Apply a 4x4 matrix to a vec3 (with an implicit 1 in the 4th dimension).
 */
export declare function vec3ApplyMatrix4(v: RawVector3, m: RawMatrix4): RawVector3;
