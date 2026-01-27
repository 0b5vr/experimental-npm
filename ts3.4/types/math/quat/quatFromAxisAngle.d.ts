import { RawVector3 } from '../vec3/RawVector3';
import { RawQuaternion } from './RawQuaternion';
/**
 * Generate a Quaternion out of axis and angle.
 * Assumes axis is normalized.
 */
export declare function quatFromAxisAngle(axis: RawVector3, angle: number): RawQuaternion;
