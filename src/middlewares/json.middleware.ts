import { Request, Response, NextFunction } from 'express';
import { errorCallback } from '../libs/callbacks';

const jsonSafetyMiddleware = (err: Error, _: Request, res: Response, next: NextFunction): void => {
    if (err instanceof SyntaxError && 'body' in err) {
        errorCallback(res, 'Invalid JSON payload', 400);
        return;
    }
    next();
};

export default jsonSafetyMiddleware;
