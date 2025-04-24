"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExtractUserId = void 0;
const common_1 = require("@nestjs/common");
const jwt = require("jsonwebtoken");
exports.ExtractUserId = (0, common_1.createParamDecorator)((data, context) => {
    const req = context.switchToHttp().getRequest();
    const token = req.headers.authorization.split(' ')[1];
    const decode = jwt.decode(token);
    console.log("Id --> ", decode.id);
    const userId = decode.id;
    console.log(userId, "userId");
    return userId;
});
//# sourceMappingURL=extract.token.js.map