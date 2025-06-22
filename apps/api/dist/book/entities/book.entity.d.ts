import { Author } from 'src/author/entities/author.entity';
import { Publisher } from 'src/publisher/entities/publisher.entity';
export declare class Book {
    id: number;
    title: string;
    type: string;
    price: number;
    author: Author;
    publisher: Publisher;
}
