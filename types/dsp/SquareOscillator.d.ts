import { Phasor } from './Phasor';
/**
 * A square wave oscillator.
 */
export declare class SquareOscillator extends Phasor {
    /**
     * Process one sample.
     *
     * @returns Output sample.
     */
    process(): number;
}
