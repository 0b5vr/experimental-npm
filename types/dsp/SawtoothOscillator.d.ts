import { Phasor } from './Phasor';
/**
 * A sawtooth wave oscillator.
 */
export declare class SawtoothOscillator extends Phasor {
    /**
     * Process one sample.
     *
     * @returns Output sample.
     */
    process(): number;
}
