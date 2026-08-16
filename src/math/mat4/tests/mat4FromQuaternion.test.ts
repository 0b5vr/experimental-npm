import { describe, expect, it } from 'vitest';
import '../../../tests/matchers/toBeCloseToArray';
import type { RawQuaternion } from '../../quat/RawQuaternion';
import { mat4FromQuaternion } from '../mat4FromQuaternion';

describe('mat4FromQuaternion', () => {
  it('returns a matrix made out of a quaternion', () => {
    const quat: RawQuaternion = [0.189, 0.378, 0.567, 0.707];
    const subject = mat4FromQuaternion(quat);

    // biome-ignore format: matrix
    expect(subject).toBeCloseToArray([
      0.071, 0.945, -0.32, 0.0,
      -0.659, 0.286, 0.696, 0.0,
      0.749, 0.161, 0.643, 0.0,
      0.0, 0.0, 0.0, 1.0,
    ]);
  });
});
