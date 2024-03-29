/**
 * Return a vector with the absolute of each component of the given vector.
 */
export function vecAbs<T extends number[]>( vec: T ): T {
  return vec.map( ( v ) => Math.abs( v ) ) as T;
}
