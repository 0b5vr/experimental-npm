/**
 * A Pure Data like phasor.
 */
export declare class Phasor {
    freqNorm: number;
    phase: number;
    /**
     * @param freqNorm Normalized frequency. `freq / sampleRate`.
     */
    constructor(freqNorm: number);
    /**
     * Process one sample.
     *
     * @returns Output sample.
     */
    process(): number;
}
