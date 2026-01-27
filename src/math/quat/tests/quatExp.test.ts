import { describe, expect, it } from 'vitest';
import '../../../tests/matchers/toBeCloseToArray';
import { vecNormalize } from '../../vec/vecNormalize';
import type { RawVector3 } from '../../vec3/RawVector3';
import { quatExp } from '../quatExp';
import { quatFromAxisAngle } from '../quatFromAxisAngle';
import type { RawQuaternion } from '../RawQuaternion';

describe('quatExp', () => {
  it('returns an exponential map of a vector quaternion', () => {
    const quat: RawQuaternion = [0.785, 0.785, 0.785, 0.0];
    const subject = quatExp(quat);

    const expected = quatFromAxisAngle(
      vecNormalize([1.0, 1.0, 1.0] as RawVector3),
      (Math.PI / 2.0) * Math.sqrt(3.0),
    );
    expect(subject).toBeCloseToArray(expected);
  });

  it('returns (0, 0, 0; 1) for the zero quaternion', () => {
    const quat: RawQuaternion = [0.0, 0.0, 0.0, 0.0];
    const subject = quatExp(quat);

    expect(subject).toBeCloseToArray([0.0, 0.0, 0.0, 1.0]);
  });

  it('returns an exponential map of a quaternion (1, 2, 3; 4)', () => {
    const quat: RawQuaternion = [1.0, 2.0, 3.0, 4.0];
    const subject = quatExp(quat);

    expect(subject).toBeCloseToArray([-8.24, -16.48, -24.72, -45.06]);
  });
});
