import { BookService } from './book.service';
import { CreateBookInput } from './dto/create-book.input';
export declare class BookResolver {
    private readonly bookService;
    constructor(bookService: BookService);
    createBook(createBookInput: CreateBookInput): Promise<{
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
    createComment(context: any, createBookInput: CreateBookInput): Promise<{
        id: number;
        title: string;
        type: string;
        price: number;
        authorId: number;
        pubId: number;
    }>;
}
