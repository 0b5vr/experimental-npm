import { BiquadFilter } from './BiquadFilter';
/**
 * BPF made of {@link BiquadFilter}.
 */
export declare class BPF extends BiquadFilter {
    /**
     * @param f0Norm Normalized center frequency. `f0 / sampleRate`.
     * @param Q Quality factor. "Resonance".
     */
    constructor(f0Norm: number, Q: number);
    /**
     * Update coefficients from normalized center frequency and Q.
     *
     * @param f0Norm Normalized center frequency. `f0 / sampleRate`.
     * @param Q Quality factor. "Resonance".
     */
    setCoefficientsFromParams(f0Norm: number, Q: number): void;
}
