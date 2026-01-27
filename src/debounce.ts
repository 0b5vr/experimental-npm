/**
 * Make the given function a debounced one.
 *
 * @example
 * ```ts
 * const func = debounce( 100, () => {
 *   // some expensive procedure
 * } );
 *
 * func();
 * func();
 * func();
 * ```
 */
export function debounce(func: () => void, timeoutMs: number): () => void {
  /** Timeout ID for the queued function call */
  let queueId: ReturnType<typeof setTimeout> | null | undefined;

  return () => {
    // clear any previously queued calls
    if (queueId) {
      clearTimeout(queueId);
    }

    // queue for execution after the timeout
    queueId = setTimeout(() => {
      func();
      queueId = null;
    }, timeoutMs);
  };
}
