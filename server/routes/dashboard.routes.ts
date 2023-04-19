import { Router } from "express";

const router = Router();

router.route('/')
    .get((req, res) => res.json({ get: 'dashboard' }))
    .post((req, res) => res.json({ ost: 'dashboard' }))
    .patch((req, res) => res.json({ atch: 'dashboard' }))
    .delete((req, res) => res.json({ delete: 'dashboard' }));

export default router;