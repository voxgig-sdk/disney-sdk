import { Context } from './Context';
declare class DisneyError extends Error {
    isDisneyError: boolean;
    sdk: string;
    code: string;
    ctx: Context;
    status: number;
    get notFound(): boolean;
    constructor(code: string, msg: string, ctx: Context);
}
export { DisneyError };
