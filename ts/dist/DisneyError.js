"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DisneyError = void 0;
class DisneyError extends Error {
    isDisneyError = true;
    sdk = 'Disney';
    code;
    ctx;
    status = -1;
    // `err.notFound` rather than a magic number at every call site.
    get notFound() { return 404 === this.status; }
    constructor(code, msg, ctx) {
        super(msg);
        this.code = code;
        this.ctx = ctx;
    }
}
exports.DisneyError = DisneyError;
//# sourceMappingURL=DisneyError.js.map