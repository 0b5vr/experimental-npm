import { Phasor } from './Phasor';

/**
 * A square wave oscillator.
 */
export class SquareOscillator extends Phasor {
  /**
   * Process one sample.
   *
   * @returns Output sample.
   */
  public process(): number {
    const phase = super.process();
    return phase < 0.5 ? 1.0 : -1.0;
  }
}
