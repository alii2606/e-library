import { Book } from 'src/book/entities/book.entity';
export declare class Publisher {
    id: number;
    pName: string;
    city: string;
    books?: Book[];
}
