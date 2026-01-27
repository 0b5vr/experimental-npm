import { expect } from 'vitest';
import { vecDot } from '../../../vec/vecDot';
import type { RawQuaternion } from '../../RawQuaternion';

interface CustomMatchers<R = unknown> {
  toBeCloseToQuaternion(expected: RawQuaternion, precision?: number): R;
}

declare module 'vitest' {
  interface Matchers<T> extends CustomMatchers<T> {}
}

function quatToString(quat: RawQuaternion): string {
  return `( ${quat[0].toFixed(3)}, ${quat[1].toFixed(3)}, ${quat[2].toFixed(3)}; ${quat[3].toFixed(3)} )`;
}

export function toBeCloseToQuaternion(
  received: RawQuaternion,
  expected: RawQuaternion,
  precision = 2,
) {
  const expectedDiff = 10.0 ** -precision / 2;

  const dot = vecDot(received, expected);
  const diff = 1.0 - Math.abs(dot);

  const isPassed = expectedDiff >= diff;

  if (!isPassed) {
    return {
      pass: false,
      message:
        () => `The received quaternion doesn't match to the expected quaternion:
expected ${quatToString(expected)},
received ${quatToString(received)}
diff: ${diff}`,
    };
  } else {
    return {
      pass: true,
      message: () =>
        'The received array approximately matches to the expected array',
    };
  }
}

expect.extend({ toBeCloseToQuaternion });
