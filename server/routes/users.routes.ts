import { Router } from 'express';

const router = Router();

router.route('/')
    .get((req, res) => res.json({ get: 'users' }))
    .post((req, res) => res.json({ post: 'users' }))
    .patch((req, res) => res.json({ patch: true }))
    .delete((req, res) => res.json({ delete: 'users' }));

export default router;