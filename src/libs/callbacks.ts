import { Response } from "express";

type ErrorCallback = (res: Response, message: string, statusCode: number) => Response;
type SuccessCallback = (res: Response, message: string, data: any, statusCode: number) => Response;

export const errorCallback = ((res: Response, message: string, statusCode: number) => {
    return res.status(statusCode).json({
        message: message
    });
}) as ErrorCallback;

export const successCallback = ((res: Response, message: string, data: any, statusCode: number) => {
    return res.status(statusCode).json({
        message: message,
        data: data
    });
}) as SuccessCallback;



