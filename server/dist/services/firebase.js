"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("firebase-admin/app");
process.env.GOOGLE_APPLICATION_CREDENTIALS = `${process.cwd()}/keys/firebase.json`;
const app = (0, app_1.initializeApp)({ credential: (0, app_1.applicationDefault)() });
exports.default = app;
