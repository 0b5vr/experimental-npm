/**
 * Make the given function a throttled one.
 *
 * @example
 * ```ts
 * const func = throttle( 100, () => {
 *   // some expensive procedure
 * } );
 *
 * func();
 * func();
 * func();
 * ```
 */
export function throttle(func: () => void, rateMs: number): () => void {
  /** Timeout ID for the queued function call */
  let queueId: ReturnType<typeof setTimeout> | null | undefined;

  /** Timestamp of the last execution */
  let lastTime = -Infinity;

  return () => {
    const now = Date.now();
    const untilNextExec = lastTime + rateMs - now;

    // clear any previously queued calls
    if (queueId) {
      clearTimeout(queueId);
    }

    if (untilNextExec <= 0) {
      // if enough time has passed, execute immediately
      lastTime = now;
      func();
    } else {
      // if not, queue for execution after the next good time
      queueId = setTimeout(() => {
        lastTime = Date.now();
        func();
      }, untilNextExec);
    }
  };
}
