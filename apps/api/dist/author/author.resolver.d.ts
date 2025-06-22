import { AuthorService } from './author.service';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
export declare class AuthorResolver {
    private readonly authorService;
    constructor(authorService: AuthorService);
    createAuthor(createAuthorInput: CreateAuthorInput): Promise<{
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
    updateAuthor(updateAuthorInput: UpdateAuthorInput): string;
    removeAuthor(id: number): string;
}
