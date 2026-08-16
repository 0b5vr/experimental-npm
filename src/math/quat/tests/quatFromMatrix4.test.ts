import { describe, expect, it } from 'vitest';
import './matchers/toBeCloseToQuaternion';
import type { RawMatrix4 } from '../../mat4/RawMatrix4';
import { quatFromMatrix4 } from '../quatFromMatrix4';

describe('quatFromMatrix4', () => {
  it('returns a quaternion made out of a matrix', () => {
    // biome-ignore format: matrix
    const quat: RawMatrix4 = [
      0.071, 0.945, -0.32, 0.0,
      -0.659, 0.286, 0.696, 0.0,
      0.749, 0.161, 0.643, 0.0,
      0.0, 0.0, 0.0, 1.0,
    ];
    const subject = quatFromMatrix4(quat);

    expect(subject).toBeCloseToQuaternion([0.189, 0.378, 0.567, 0.707]);
  });
});
