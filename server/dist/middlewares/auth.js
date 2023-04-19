"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const auth_1 = require("firebase-admin/auth");
function default_1(req, res, next) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const { authorization } = req.headers;
            console.log(authorization);
            if (!authorization) {
                return res.status(401).send('Unauthorized');
            }
            const result = yield (0, auth_1.getAuth)().verifyIdToken(authorization);
            next();
        }
        catch (err) {
            next(err);
        }
    });
}
exports.default = default_1;
;
