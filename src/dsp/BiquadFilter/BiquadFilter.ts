/**
 * A biquad IIR filter.
 */
export class BiquadFilter {
  /** Normalized feed-forward coefficient (b0 / a0). */
  public b0a0 = 0.0;
  /** Normalized feed-forward coefficient (b1 / a0). */
  public b1a0 = 0.0;
  /** Normalized feed-forward coefficient (b2 / a0). */
  public b2a0 = 0.0;
  /** Normalized feedback coefficient (a1 / a0). */
  public a1a0 = 0.0;
  /** Normalized feedback coefficient (a2 / a0). */
  public a2a0 = 0.0;

  /** Previous input sample x[n-1]. */
  public x1 = 0.0;
  /** Previous input sample x[n-2]. */
  public x2 = 0.0;
  /** Previous output sample y[n-1]. */
  public y1 = 0.0;
  /** Previous output sample y[n-2]. */
  public y2 = 0.0;

  /**
   * Process a single sample.
   *
   * @param x0 Input sample.
   * @returns Output sample.
   */
  public process(x0: number): number {
    const y0 = (
      this.b0a0 * x0
      + this.b1a0 * this.x1
      + this.b2a0 * this.x2
      - this.a1a0 * this.y1
      - this.a2a0 * this.y2
    );

    this.x2 = this.x1;
    this.x1 = x0;
    this.y2 = this.y1;
    this.y1 = y0;

    return y0;
  }
}
