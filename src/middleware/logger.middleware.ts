import { Injectable, NestMiddleware } from "@nestjs/common";
import { randomUUID } from "crypto";
import { NextFunction } from "express";

@Injectable()
export class LoggerMiddleware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
        const stamp = randomUUID()
        const at = Date.now()
        console.log(`[${stamp}] - ${req.url}`);
        next();
        console.log(`[${stamp}] finished. Duration time - ${Date.now() - at}`)
    }
}