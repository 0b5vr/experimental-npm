import { BiquadFilter } from './BiquadFilter';
/**
 * HPF made of {@link BiquadFilter}.
 */
export declare class HPF extends BiquadFilter {
    /**
     * @param f0Norm Normalized cutoff frequency. `f0 / sampleRate`.
     * @param Q Quality factor. "Resonance".
     */
    constructor(f0Norm: number, Q: number);
    /**
     * Update coefficients from normalized cutoff and Q.
     *
     * @param f0Norm Normalized cutoff frequency. `f0 / sampleRate`.
     * @param Q Quality factor. "Resonance".
     */
    setCoefficientsFromParams(f0Norm: number, Q: number): void;
}
