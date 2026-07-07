import { describe, expect, it } from 'vitest';
import '../../../tests/matchers/toBeCloseToArray';
import { quatNlerp } from '../quatNlerp';
import type { RawQuaternion } from '../RawQuaternion';

const INV_SQRT2 = 1.0 / Math.sqrt(2.0);

describe('quatNlerp', () => {
  it('returns a interpolated quaternion of two given quaternions', () => {
    const quatA: RawQuaternion = [INV_SQRT2, 0.0, 0.0, INV_SQRT2];
    const quatB: RawQuaternion = [0.0, INV_SQRT2, 0.0, INV_SQRT2];
    const subject = quatNlerp(quatA, quatB, 0.25);

    expect(subject).toBeCloseToArray([0.588, 0.196, 0.0, 0.784]);
  });

  it('returns a interpolated quaternion of two given quaternions (with negative dot product)', () => {
    const quatA: RawQuaternion = [0.0, 0.0, 0.0, 1.0];
    const quatB: RawQuaternion = [0.0, 0.0, INV_SQRT2, -INV_SQRT2];
    const subject = quatNlerp(quatA, quatB, 0.5);

    expect(subject).toBeCloseToArray([0.0, 0.0, -0.382, 0.924]);
  });
});
