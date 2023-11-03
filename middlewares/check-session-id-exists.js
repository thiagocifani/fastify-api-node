"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkSessionIdExists = void 0;
async function checkSessionIdExists(request, response) {
    const sessionId = request.cookies.sessionId;
    if (!sessionId) {
        return response.status(401).send({
            error: 'Unauthorized',
        });
    }
}
exports.checkSessionIdExists = checkSessionIdExists;
