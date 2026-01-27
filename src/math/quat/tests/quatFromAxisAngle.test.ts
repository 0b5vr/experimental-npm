import { describe, expect, it } from 'vitest';
import '../../../tests/matchers/toBeCloseToArray';
import { vecNormalize } from '../../vec/vecNormalize';
import type { RawVector3 } from '../../vec3/RawVector3';
import { quatFromAxisAngle } from '../quatFromAxisAngle';

describe('quatFromAxisAngle', () => {
  it('returns a quaternion made out of axis and angle', () => {
    const axis: RawVector3 = vecNormalize([1.0, 2.0, 3.0]);
    const angle = Math.PI / 2.0;
    const subject = quatFromAxisAngle(axis, angle);

    expect(subject).toBeCloseToArray([0.189, 0.378, 0.567, 0.707]);
  });
});
