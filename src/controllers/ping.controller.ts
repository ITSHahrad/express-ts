import { Request, Response } from "express";
import { successCallback } from "../libs/callbacks";

export default class PingController {
    async ping(req: Request, res: Response): Promise<void> {
        await successCallback(res, 'Pong', {}, 200);
    }
};


