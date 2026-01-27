/**
 * A biquad IIR filter.
 */
export declare class BiquadFilter {
    /** Normalized feed-forward coefficient (b0 / a0). */
    b0a0: number;
    /** Normalized feed-forward coefficient (b1 / a0). */
    b1a0: number;
    /** Normalized feed-forward coefficient (b2 / a0). */
    b2a0: number;
    /** Normalized feedback coefficient (a1 / a0). */
    a1a0: number;
    /** Normalized feedback coefficient (a2 / a0). */
    a2a0: number;
    /** Previous input sample x[n-1]. */
    x1: number;
    /** Previous input sample x[n-2]. */
    x2: number;
    /** Previous output sample y[n-1]. */
    y1: number;
    /** Previous output sample y[n-2]. */
    y2: number;
    /**
     * Process a single sample.
     *
     * @param x0 Input sample.
     * @returns Output sample.
     */
    process(x0: number): number;
}
