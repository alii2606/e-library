import { Book } from 'src/book/entities/book.entity';
export declare class Author {
    id: number;
    fName: string;
    lName: string;
    country: string;
    city: string;
    address: string;
    books?: Book[];
}
