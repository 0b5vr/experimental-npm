import { describe, expect, it } from 'vitest';
import '../../../tests/matchers/toBeCloseToArray';
import { mat3Multiply } from '../mat3Multiply';
import type { RawMatrix3 } from '../RawMatrix3';

const rawMatrixRotateAroundX45: RawMatrix3 = [
  1.0, 0.0, 0.0, 0.0, 0.707, 0.707, 0.0, -0.707, 0.707,
];

const rawMatrixInvLookAtFrom345: RawMatrix3 = [
  0.857, -0.291, 0.424, 0.0, 0.825, 0.566, -0.514, -0.485, 0.707,
];

const rawMatrixPerspectiveFov40Near1Far500: RawMatrix3 = [
  2.7474774194546225, 0, 0, 0, 2.7474774194546225, 0, 0, 0, -1.0040080160320641,
];

describe('mat3Multiply', () => {
  it('returns a multiplication result of two matrices', () => {
    const subject = mat3Multiply(
      rawMatrixInvLookAtFrom345,
      rawMatrixRotateAroundX45,
    );

    expect(subject).toBeCloseToArray([
      0.857, -0.291, 0.424, -0.364, 0.24, 0.9, -0.364, -0.926, 0.1,
    ]);
  });

  it('returns a multiplication result of three matrices', () => {
    const subject = mat3Multiply(
      rawMatrixPerspectiveFov40Near1Far500,
      rawMatrixInvLookAtFrom345,
      rawMatrixRotateAroundX45,
    );

    expect(subject).toBeCloseToArray([
      2.356, -0.8, -0.426, -1.0, 0.66, -0.904, -1.0, -2.544, -0.1,
    ]);
  });
});
