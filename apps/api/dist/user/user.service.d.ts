import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class UserService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(createUserInput: CreateUserInput): Promise<{
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
    findOne(id: number): string;
    update(id: number, updateUserInput: UpdateUserInput): string;
    remove(id: number): string;
}
