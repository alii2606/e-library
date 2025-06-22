import { CreateAuthInput } from './dto/create-auth.input';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthService {
    private readonly prisma;
    constructor(prisma: PrismaService);
    validateLocalUser({ userName, password }: CreateAuthInput): Promise<{
        userName: string;
        password: string;
        fName: string;
        lName: string;
        isManager: boolean;
        id: number;
    }>;
}
