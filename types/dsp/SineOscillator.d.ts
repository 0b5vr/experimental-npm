import { Phasor } from './Phasor';
/**
 * A sine wave oscillator.
 */
export declare class SineOscillator extends Phasor {
    /**
     * Process one sample.
     *
     * @returns Output sample.
     */
    process(): number;
}
