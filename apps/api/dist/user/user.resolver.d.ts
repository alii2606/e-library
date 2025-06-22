import { UserService } from './user.service';
import { CreateUserInput } from './dto/create-user.input';
export declare class UserResolver {
    private readonly userService;
    constructor(userService: UserService);
    createUser(createUserInput: CreateUserInput): Promise<{
        userName: string;
        password: string;
        fName: string;
        lName: string;
        isManager: boolean;
        id: number;
    }>;
    findAll(): Promise<{
        userName: string;
        password: string;
        fName: string;
        lName: string;
        isManager: boolean;
        id: number;
    }[]>;
}
