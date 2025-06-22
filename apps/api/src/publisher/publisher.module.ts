import { Module } from '@nestjs/common';
import { PublisherService } from './publisher.service';
import { PublisherResolver } from './publisher.resolver';
import { PrismaService } from 'src/prisma/prisma.service';

@Module({
  providers: [PublisherResolver, PublisherService,PrismaService],
})
export class PublisherModule {}
