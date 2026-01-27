import { Pool } from '../Pool/Pool';
interface EXT_disjoint_timer_query_webgl2 {
    readonly TIME_ELAPSED_EXT: number;
}
export declare class GPUTimer {
    queries: Pool<WebGLQuery>;
    stack: Promise<number>[];
    ext: EXT_disjoint_timer_query_webgl2;
    readonly gl: WebGL2RenderingContext;
    private __loopTasks;
    static isSupported(gl: WebGLRenderingContext | WebGL2RenderingContext): boolean;
    constructor(gl: WebGL2RenderingContext);
    update(): void;
    measure(func: () => void): Promise<number>;
    check(query: WebGLQuery): Promise<number>;
}
export {};
