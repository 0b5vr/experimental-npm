import { Phasor } from './Phasor';

/**
 * A sawtooth wave oscillator.
 */
export class SawtoothOscillator extends Phasor {
  /**
   * Process one sample.
   *
   * @returns Output sample.
   */
  public process(): number {
    const phase = super.process();
    return phase * 2.0 - 1.0;
  }
}
