import { AuthService } from './auth.service';
import { UserDTO } from './dto/user.dto';
import { Request, Response } from 'express';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    registerAccount(req: Request, UserDTO: UserDTO): Promise<any>;
    login(UserDTO: UserDTO, res: Response): Promise<any>;
    isAuthenticated(req: Request): any;
}
