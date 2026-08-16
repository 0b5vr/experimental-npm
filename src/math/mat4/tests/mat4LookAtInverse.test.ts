import { describe, expect, it } from 'vitest';
import '../../../tests/matchers/toBeCloseToArray';
import type { RawVector3 } from '../../vec3/RawVector3';
import { mat4LookAtInverse } from '../mat4LookAtInverse';

describe('mat4LookAtInverse', () => {
  it('returns an inverse of lookAt matrix', () => {
    const position: RawVector3 = [3.0, 4.0, 5.0];
    const target: RawVector3 = [0.0, 0.0, 0.0];
    const up: RawVector3 = [0.0, 1.0, 0.0];
    const subject = mat4LookAtInverse(position, target, up);

    // biome-ignore format: matrix
    const expected = [
      0.857, -0.291, 0.424, 0.0,
      0.0, 0.825, 0.566, 0.0,
      -0.514, -0.485, 0.707, 0.0,
      0.0, 0.0, -7.071, 1.0,
    ];

    expect(subject).toBeCloseToArray(expected);
  });
});
