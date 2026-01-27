import { describe, expect, it } from 'vitest';
import '../../../tests/matchers/toBeCloseToArray';
import { mat4Determinant } from '../mat4Determinant';
import type { RawMatrix4 } from '../RawMatrix4';

describe('mat4Determinant', () => {
  it('returns a determinant of the matrix', () => {
    const rawMatrixLookAtFrom345: RawMatrix4 = [
      0.857, 0.0, -0.514, 0.0, -0.291, 0.825, -0.485, 0.0, 0.424, 0.566, 0.707,
      0.0, 3.0, 4.0, 5.0, 1.0,
    ];

    const subject = mat4Determinant(rawMatrixLookAtFrom345);

    expect(subject).toBeCloseTo(1.0);
  });
});
