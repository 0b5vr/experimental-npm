import { Phasor } from './Phasor';

/**
 * A triangle wave oscillator.
 */
export class TriangleOscillator extends Phasor {
  /**
   * Process one sample.
   *
   * @returns Output sample.
   */
  public process(): number {
    const phase = super.process();
    return 1.0 - 4.0 * Math.abs(phase - 0.5);
  }
}
