import { BiquadFilter } from './BiquadFilter';

/**
 * BPF made of {@link BiquadFilter}.
 */
export class BPF extends BiquadFilter {
  /**
   * @param f0Norm Normalized center frequency. `f0 / sampleRate`.
   * @param Q Quality factor. "Resonance".
   */
  constructor(f0Norm: number, Q: number) {
    super();
    this.setCoefficientsFromParams(f0Norm, Q);
  }

  /**
   * Update coefficients from normalized center frequency and Q.
   *
   * @param f0Norm Normalized center frequency. `f0 / sampleRate`.
   * @param Q Quality factor. "Resonance".
   */
  public setCoefficientsFromParams(f0Norm: number, Q: number): void {
    const omega0 = 2.0 * Math.PI * f0Norm;
    const cosOmega0 = Math.cos(omega0);
    const sinOmega0 = Math.sin(omega0);
    const alpha = 0.5 * sinOmega0 / Q;

    const a0 = 1.0 + alpha;
    this.a1a0 = (-2.0 * cosOmega0) / a0;
    this.a2a0 = (1.0 - alpha) / a0;
    this.b0a0 = alpha / a0;
    this.b1a0 = 0.0;
    this.b2a0 = -this.b0a0;
  }
}
