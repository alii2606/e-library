import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class BookService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createBookInput: CreateBookInput): Promise<{
        id: number;
        title: string;
        type: string;
        price: number;
        authorId: number;
        pubId: number;
    }>;
    findAll(): Promise<({
        author: {
            fName: string;
            lName: string;
            id: number;
            country: string;
            city: string;
            address: string;
        };
        publisher: {
            id: number;
            city: string;
            pName: string;
        };
    } & {
        id: number;
        title: string;
        type: string;
        price: number;
        authorId: number;
        pubId: number;
    })[]>;
    findOne(id: number): string;
    update(id: number, updateBookInput: UpdateBookInput): string;
    remove(id: number): string;
}
