import { describe, expect, it } from 'vitest';
import '../../../tests/matchers/toBeCloseToArray';
import type { RawMatrix4 } from '../../mat4/RawMatrix4';
import { eulerFromMat4 } from '../eulerFromMat4';

const mat4X45Y45Z45: RawMatrix4 = [
  0.5, 0.5, -0.707, 0.0, -0.146, 0.854, 0.5, 0.0, 0.854, -0.146, 0.5, 0.0, 0.0,
  0.0, 0.0, 1.0,
];

describe('eulerFromMat4', () => {
  it('returns an euler angles out of a matrix4', () => {
    const subject = eulerFromMat4(mat4X45Y45Z45, 'XYZ');
    expect(subject).toBeCloseToArray([0.785, 0.785, 0.785]);
  });

  // See eulerFromMat3.test.ts for more in-depth test cases
});
