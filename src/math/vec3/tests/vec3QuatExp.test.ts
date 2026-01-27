import { describe, expect, it } from 'vitest';
import '../../../tests/matchers/toBeCloseToArray';
import { quatFromAxisAngle } from '../../quat/quatFromAxisAngle';
import { vecNormalize } from '../../vec/vecNormalize';
import type { RawVector3 } from '../RawVector3';
import { vec3QuatExp } from '../vec3QuatExp';

describe('vec3QuatExp', () => {
  it('returns an exponential map of a vector quaternion', () => {
    const vec: RawVector3 = [0.785, 0.785, 0.785];
    const subject = vec3QuatExp(vec);

    const expected = quatFromAxisAngle(
      vecNormalize([1.0, 1.0, 1.0] as RawVector3),
      (Math.PI / 2.0) * Math.sqrt(3.0),
    );
    expect(subject).toBeCloseToArray(expected);
  });

  it('returns (0, 0, 0; 1) for the zero vector', () => {
    const vec: RawVector3 = [0.0, 0.0, 0.0];
    const subject = vec3QuatExp(vec);

    expect(subject).toBeCloseToArray([0.0, 0.0, 0.0, 1.0]);
  });
});
