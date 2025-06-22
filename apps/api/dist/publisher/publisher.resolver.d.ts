import { PublisherService } from './publisher.service';
import { CreatePublisherInput } from './dto/create-publisher.input';
import { UpdatePublisherInput } from './dto/update-publisher.input';
export declare class PublisherResolver {
    private readonly publisherService;
    constructor(publisherService: PublisherService);
    createPublisher(createPublisherInput: CreatePublisherInput): Promise<{
        id: number;
        city: string;
        pName: string;
    }>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        id: number;
        city: string;
        pName: string;
    }[]>;
    updatePublisher(updatePublisherInput: UpdatePublisherInput): string;
    removePublisher(id: number): string;
}
