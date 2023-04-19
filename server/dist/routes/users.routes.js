"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route('/')
    .get((req, res) => res.json({ get: 'users' }))
    .post((req, res) => res.json({ post: 'users' }))
    .patch((req, res) => res.json({ patch: true }))
    .delete((req, res) => res.json({ delete: 'users' }));
exports.default = router;
