import { FindOneOptions, Repository } from "typeorm";
import { UserDTO } from "./dto/user.dto";
import { User } from "./entity/user.entity";
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    findByFields(options: FindOneOptions<User>): Promise<User | undefined>;
    save(userDTO: UserDTO): Promise<UserDTO | undefined>;
    transformPassword(user: UserDTO): Promise<void>;
}
