import { UserService } from './user.service';
import { UserDTO } from './dto/user.dto';
import { Payload } from './security/payload.interface';
import { User } from './entity/user.entity';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private userService;
    private jwtService;
    constructor(userService: UserService, jwtService: JwtService);
    registerUser(newUser: UserDTO): Promise<UserDTO>;
    validateUser(userDTO: UserDTO): Promise<{
        accessToken: string;
    } | undefined>;
    tokenValidateUser(payload: Payload): Promise<User | undefined>;
}
