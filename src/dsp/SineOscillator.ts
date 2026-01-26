import { Phasor } from './Phasor';

/**
 * A sine wave oscillator.
 */
export class SineOscillator extends Phasor {
  /**
   * Process one sample.
   *
   * @returns Output sample.
   */
  public process(): number {
    const phase = super.process();
    return Math.sin(phase * 2.0 * Math.PI);
  }
}
