import { describe, expect, it } from 'vitest';
import '../../../tests/matchers/toBeCloseToArray';
import type { RawQuaternion } from '../../quat/RawQuaternion';
import { eulerFromQuaternion } from '../eulerFromQuaternion';

const quatX45Y45Z45: RawQuaternion = [0.191, 0.461, 0.191, 0.844];

describe('eulerFromQuaternion', () => {
  it('returns an euler angles out of a quaternion', () => {
    const subject = eulerFromQuaternion(quatX45Y45Z45, 'XYZ');
    expect(subject).toBeCloseToArray([0.785, 0.785, 0.785]);
  });

  // See eulerFromMat3.test.ts for more in-depth test cases
});
