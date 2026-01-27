import { describe, expect, it } from 'vitest';
import '../../../tests/matchers/toBeCloseToArray';
import type { RawVector3 } from '../../vec3/RawVector3';
import { mat4LookAt } from '../mat4LookAt';

describe('mat4LookAt', () => {
  it('returns a lookAt matrix', () => {
    const position: RawVector3 = [3.0, 4.0, 5.0];
    const target: RawVector3 = [0.0, 0.0, 0.0];
    const up: RawVector3 = [0.0, 1.0, 0.0];
    const subject = mat4LookAt(position, target, up);

    const expected = [
      0.857, 0.0, -0.514, 0.0, -0.291, 0.825, -0.485, 0.0, 0.424, 0.566, 0.707,
      0.0, 3.0, 4.0, 5.0, 1.0,
    ];

    expect(subject).toBeCloseToArray(expected);
  });
});
