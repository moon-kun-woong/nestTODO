import { Body, Controller, Get, Post, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { UserDTO } from './dto/user.dto';
import { Request, Response } from 'express';
import { AuthGuard } from './security/auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private authService : AuthService){}

    @Post("/register")
    async registerAccount(@Req() req : Request, @Body() UserDTO : UserDTO): Promise<any>{
        
        return await this.authService.registerUser(UserDTO);
    }
    @Post("/login")
    async login(@Body() UserDTO: UserDTO, @Res() res: Response): Promise<any>{
        const jwt = await this.authService.validateUser(UserDTO);
        res.setHeader("Authorization", "Bearer "+ jwt.accessToken);
        return res.json(jwt);
    }

    @Get('/authenticate')
    @UseGuards(AuthGuard)
    isAuthenticated(@Req() req: Request): any { 
        const user: any = req.user;
        return user;
    }
}
