import { RawQuaternion } from '../quat/RawQuaternion';
import { RawVector3 } from '../vec3/RawVector3';
import { RawMatrix4 } from './RawMatrix4';
/**
 * Compose a matrix out of position, scale, and rotation.
 * Yoinked from Three.js.
 */
export declare function mat4Compose(position: RawVector3, rotation: RawQuaternion, scale: RawVector3): RawMatrix4;
