import { describe, expect, it } from 'vitest';
import '../../../tests/matchers/toBeCloseToArray';
import { vecNormalize } from '../../vec/vecNormalize';
import type { RawVector3 } from '../../vec3/RawVector3';
import { quatFromAxisAngle } from '../quatFromAxisAngle';
import { quatLog } from '../quatLog';
import type { RawQuaternion } from '../RawQuaternion';

describe('quatLog', () => {
  it('returns a logarithm map of a unit quaternion from axis-angle', () => {
    const quat = quatFromAxisAngle(
      vecNormalize([1.0, 1.0, 1.0] as RawVector3),
      (Math.PI / 2.0) * Math.sqrt(3.0),
    );
    const subject = quatLog(quat);

    expect(subject).toBeCloseToArray([0.785, 0.785, 0.785, 0.0]);
  });

  it('returns (0, 0, 0; 0) for the identity quaternion', () => {
    const quat: RawQuaternion = [0.0, 0.0, 0.0, 1.0];
    const subject = quatLog(quat);

    expect(subject).toBeCloseToArray([0.0, 0.0, 0.0, 0.0]);
  });

  it('returns a logarithm map of a quaternion (1, 2, 3; 4)', () => {
    const quat: RawQuaternion = [1.0, 2.0, 3.0, 4.0];
    const subject = quatLog(quat);

    expect(subject).toBeCloseToArray([0.201, 0.402, 0.603, 1.701]);
  });
});
