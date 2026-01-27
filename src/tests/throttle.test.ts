import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest';
import { throttle } from '../throttle';

describe( 'throttle', () => {
  beforeEach( () => {
    vi.useFakeTimers();
  } );

  afterEach( () => {
    vi.restoreAllMocks();
  } );

  it( 'throttles the given function', () => {
    let value = 0;
    let throttledValue = 0;

    const throttled = throttle( () => {
      throttledValue = value;
    }, 500 );

    const expected = [
      0, 0, 0, 0, 0,
      2, 2, 2, 2, 2,
      6, 6, 6, 6, 6,
      9, 9, 9, 9, 9,
      9, 9, 1, 1, 1,
    ];

    const rawValues = [
      0, 0, 0, 0, 0,
      2, 3, 4, 5, 6,
      7, 8, 9, 0, 0,
      0, 0, 0, 0, 0,
      0, 0, 1, 0, 0,
    ];

    const result = rawValues.map( ( v ) => {
      if ( v !== 0 ) {
        value = v;
        throttled();
      }

      const ret = throttledValue;
      vi.advanceTimersByTime( 100 );
      return ret;
    } );

    expect( result ).toEqual( expected );
  } );
} );
