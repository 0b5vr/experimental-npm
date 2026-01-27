/**
 * The implementation of Critical Damped Spring (CDS).
 *
 * This is the very naive implementation. No `deltaTime` clamping or sub-stepping.
 * You may want to do such improvement yourself if you need this to be more robust.
 *
 * Shoutouts to Keijiro Takahashi
 */
export class CDS {
  /**
   * The factor (stiffness) of the spring.
   * I recomment a value around 100 or 1000.
   */
  public factor = 100.0;

  /**
   * The ratio (damping) of the spring.
   * 1.0 == critical damping.
   */
  public ratio = 1.0;

  /**
   * The current velocity of the spring.
   */
  public velocity = 0.0;

  /**
   * The current value of the spring.
   */
  public value = 0.0;

  /**
   * The target value of the spring.
   * You usually want to set this value to control the spring.
   */
  public target = 0.0;

  public update(deltaTime: number): number {
    this.velocity +=
      (this.factor * (this.target - this.value) -
        2.0 * this.velocity * Math.sqrt(this.factor) * this.ratio) *
      deltaTime;

    this.value += this.velocity * deltaTime;
    return this.value;
  }
}
