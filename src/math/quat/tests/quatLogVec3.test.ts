import { describe, expect, it } from 'vitest';
import '../../../tests/matchers/toBeCloseToArray';
import { quatFromAxisAngle } from '../quatFromAxisAngle';
import { quatLogVec3 } from '../quatLogVec3';
import { vecNormalize } from '../../vec';
import type { RawQuaternion } from '../RawQuaternion';
import type { RawVector3 } from '../../vec3/RawVector3';

describe('quatLogVec3', () => {
  it('returns a vector part of a logarithm map of a unit quaternion from axis-angle', () => {
    const quat = quatFromAxisAngle(
      vecNormalize([1.0, 1.0, 1.0] as RawVector3),
      Math.PI / 2.0 * Math.sqrt(3.0)
    );
    const subject = quatLogVec3(quat);

    expect(subject).toBeCloseToArray([0.785, 0.785, 0.785]);
  });

  it('returns (0, 0, 0) for the identity quaternion', () => {
    const quat: RawQuaternion = [0.0, 0.0, 0.0, 1.0];
    const subject = quatLogVec3(quat);

    expect(subject).toBeCloseToArray([0.0, 0.0, 0.0]);
  });
});
