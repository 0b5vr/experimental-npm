import type { RawQuaternion } from '../quat/RawQuaternion';
import type { RawMatrix4 } from '.';
/**
 * Convert a quaternion into a matrix4.
 *
 * Yoinked from Three.js.
 *
 * See: https://threejs.org/docs/#api/en/math/Matrix4.makeRotationFromQuaternion
 */
export declare function mat4FromQuaternion(quat: RawQuaternion): RawMatrix4;
