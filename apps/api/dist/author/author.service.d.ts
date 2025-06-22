import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class AuthorService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createAuthorInput: CreateAuthorInput): Promise<{
        fName: string;
        lName: string;
        id: number;
        country: string;
        city: string;
        address: string;
    }>;
    findAll(): Promise<{
        fName: string;
        lName: string;
        id: number;
        country: string;
        city: string;
        address: string;
    }[]>;
    findOne(id: number): string;
    update(id: number, updateAuthorInput: UpdateAuthorInput): string;
    remove(id: number): string;
}
