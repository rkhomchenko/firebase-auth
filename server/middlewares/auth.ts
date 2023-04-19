import { NextFunction, Request, Response } from "express";
import { getAuth } from 'firebase-admin/auth'

export default async function (req: Request, res: Response, next: NextFunction) {
    try {
        const { authorization } = req.headers;

        console.log(authorization);
        

        if (!authorization) {
            return res.status(401).send('Unauthorized');
        }

        const result = await getAuth().verifyIdToken(authorization);

        next();
    } catch (err) {
        next(err);
    }
};