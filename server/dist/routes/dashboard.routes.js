"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = (0, express_1.Router)();
router.route('/')
    .get((req, res) => res.json({ get: 'dashboard' }))
    .post((req, res) => res.json({ ost: 'dashboard' }))
    .patch((req, res) => res.json({ atch: 'dashboard' }))
    .delete((req, res) => res.json({ delete: 'dashboard' }));
exports.default = router;
