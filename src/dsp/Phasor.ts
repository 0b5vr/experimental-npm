/**
 * A Pure Data like phasor.
 */
export class Phasor {
  public freqNorm: number;
  public phase: number;

  /**
   * @param freqNorm Normalized frequency. `freq / sampleRate`.
   */
  constructor(freqNorm: number) {
    this.freqNorm = freqNorm;
    this.phase = 0.0;
  }

  /**
   * Process one sample.
   *
   * @returns Output sample.
   */
  public process(): number {
    const out = this.phase;
    this.phase = (this.phase + this.freqNorm) % 1.0;
    return out;
  }
}
