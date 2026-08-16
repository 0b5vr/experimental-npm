import { expect } from 'vitest';

interface CustomMatchers<R = unknown> {
  toBeCloseToArray(expected: number[], precision?: number): R;
}

declare module 'vitest' {
  interface Matchers<T> extends CustomMatchers<T> {}
}

export function toBeCloseToArray(received: number[], expected: number[], precision = 2) {
  const expectedDiff = 10.0 ** -precision / 2;

  if (received.length !== expected.length) {
    return {
      pass: false,
      message: () =>
        `Lengths of arrays are not same (expected ${expected.length}, received ${received.length})`,
    };
  }

  let isPassed = true;
  const diffs: Array<{
    received: number;
    expected: number;
    index: number;
  }> = [];
  received.forEach((vr, i) => {
    const ve = expected[i];
    const p = Math.abs(vr - ve) < expectedDiff;
    if (!p) {
      isPassed = false;
      diffs.push({
        received: vr,
        expected: ve,
        index: i,
      });
    }
    return Math.abs(vr - ve) < expectedDiff;
  });

  if (!isPassed) {
    return {
      pass: false,
      message: () => `The received array doesn't match to the expected array:
${diffs.map((diff) => `  [${diff.index}]: expected ${diff.expected}, received ${diff.received}`).join('\n')}`,
    };
  } else {
    return {
      pass: true,
      message: () => 'The received array approximately matches to the expected array',
    };
  }
}

expect.extend({ toBeCloseToArray });
