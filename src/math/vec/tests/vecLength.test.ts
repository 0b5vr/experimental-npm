import { describe, expect, it } from 'vitest';
import { vecLength } from '../vecLength';

describe( 'vecLength', () => {
  it( 'returns a length of the vec', () => {
    const vec = [ 1.0, 2.0, 3.0 ];
    const subject = vecLength( vec );

    expect( subject ).toBeCloseTo( 3.742 );
  } );
} );
