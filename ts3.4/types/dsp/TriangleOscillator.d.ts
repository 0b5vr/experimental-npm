import { Phasor } from './Phasor';
/**
 * A triangle wave oscillator.
 */
export declare class TriangleOscillator extends Phasor {
    /**
     * Process one sample.
     *
     * @returns Output sample.
     */
    process(): number;
}
