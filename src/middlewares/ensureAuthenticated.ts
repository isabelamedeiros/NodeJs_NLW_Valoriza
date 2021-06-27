import { Request, Response, NextFunction } from 'express';
import { verify } from 'jsonwebtoken';

interface IPayLoad {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction){
    const authToken = request.headers.authorization;

    if(!authToken){
        return response.status(401).end();
    }

    const [,token] = authToken.split(" ")

    // console.log(token)

    try {
    const { sub } = verify(token, "c2607833950df4d45c9484957f4a2316") as IPayLoad;
        request.user_id = sub;

    } catch (err){
        return response.status(401).end();
    }
    return next();
}