import { RawVector3 } from '../vec3/RawVector3';
import { RawQuaternion } from './RawQuaternion';
/**
 * Return a quaternion which looks at the direction of `look`.
 */
export declare function quatLookRotation(look: RawVector3, up?: RawVector3): RawQuaternion;
