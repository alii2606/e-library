import { CreatePublisherInput } from './dto/create-publisher.input';
import { UpdatePublisherInput } from './dto/update-publisher.input';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class PublisherService {
    private prisma;
    constructor(prisma: PrismaService);
    create(createPublisherInput: CreatePublisherInput): Promise<{
        id: number;
        city: string;
        pName: string;
    }>;
    findAll(): import("generated/prisma").Prisma.PrismaPromise<{
        id: number;
        city: string;
        pName: string;
    }[]>;
    findOne(id: number): string;
    update(id: number, updatePublisherInput: UpdatePublisherInput): string;
    remove(id: number): string;
}
