import { describe, expect, it } from 'vitest';
import '../../../tests/matchers/toBeCloseToArray';
import { mat4Inverse } from '../mat4Inverse';
import type { RawMatrix4 } from '../RawMatrix4';

const rawMatrixLookAtFrom345: RawMatrix4 = [
  0.857, 0.0, -0.514, 0.0, -0.291, 0.825, -0.485, 0.0, 0.424, 0.566, 0.707, 0.0,
  3.0, 4.0, 5.0, 1.0,
];

const rawMatrixInvLookAtFrom345: RawMatrix4 = [
  0.857, -0.291, 0.424, 0.0, 0.0, 0.825, 0.566, 0.0, -0.514, -0.485, 0.707, 0.0,
  0.0, 0.0, -7.071, 1.0,
];

const rawMatrixCannotInvert: RawMatrix4 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
];

const rawMatrixZero: RawMatrix4 = [
  0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0,
  0.0,
];

describe('mat4Inverse', () => {
  it('returns an inverse of the matrix', () => {
    const subject = mat4Inverse(rawMatrixLookAtFrom345);

    expect(subject).toBeCloseToArray(rawMatrixInvLookAtFrom345);
  });

  describe('when given matrix cannot be inverted', () => {
    it('returns a zero matrix', () => {
      const subject = mat4Inverse(rawMatrixCannotInvert);

      expect(subject).toBeCloseToArray(rawMatrixZero);
    });
  });
});
