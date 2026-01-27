/**
 * The implementation of Critical Damped Spring (CDS).
 *
 * This is the very naive implementation. No `deltaTime` clamping or sub-stepping.
 * You may want to do such improvement yourself if you need this to be more robust.
 *
 * Shoutouts to Keijiro Takahashi
 */
export declare class CDS {
    /**
     * The factor (stiffness) of the spring.
     * I recomment a value around 100 or 1000.
     */
    factor: number;
    /**
     * The ratio (damping) of the spring.
     * 1.0 == critical damping.
     */
    ratio: number;
    /**
     * The current velocity of the spring.
     */
    velocity: number;
    /**
     * The current value of the spring.
     */
    value: number;
    /**
     * The target value of the spring.
     * You usually want to set this value to control the spring.
     */
    target: number;
    update(deltaTime: number): number;
}
