import type { RawMatrix4 } from '../mat4/RawMatrix4';
import { vecScale } from '../vec/vecScale';
import { vec4ApplyMatrix4 } from '../vec4/vec4ApplyMatrix4';
import type { RawVector3 } from './RawVector3';

/**
 * Apply a 4x4 matrix to a vec3 (with an implicit 1 in the 4th dimension).
 */
export function vec3ApplyMatrix4(v: RawVector3, m: RawMatrix4): RawVector3 {
  const vec4 = vec4ApplyMatrix4([...v, 1], m);
  const xyz: RawVector3 = [vec4[0], vec4[1], vec4[2]];
  const w = vec4[3];
  return vecScale(xyz, 1.0 / w);
}
