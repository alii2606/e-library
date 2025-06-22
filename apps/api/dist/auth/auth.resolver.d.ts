import { AuthService } from './auth.service';
import { CreateAuthInput } from './dto/create-auth.input';
export declare class AuthResolver {
    private readonly authService;
    constructor(authService: AuthService);
    createAuth(createAuthInput: CreateAuthInput): Promise<{
        userName: string;
        isManager: boolean;
    }>;
}
