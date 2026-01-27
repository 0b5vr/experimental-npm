import { describe, expect, it } from 'vitest';
import './matchers/toBeCloseToQuaternion';
import type { RawMatrix3 } from '../../mat3/RawMatrix3';
import { quatFromMatrix3 } from '../quatFromMatrix3';

describe('quatFromMatrix3', () => {
  it('returns a quaternion made out of a matrix', () => {
    const quat: RawMatrix3 = [
      0.071, 0.945, -0.32, -0.659, 0.286, 0.696, 0.749, 0.161, 0.643,
    ];
    const subject = quatFromMatrix3(quat);

    expect(subject).toBeCloseToQuaternion([0.189, 0.378, 0.567, 0.707]);
  });
});
