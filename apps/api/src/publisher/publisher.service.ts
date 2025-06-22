import { Injectable } from '@nestjs/common';
import { CreatePublisherInput } from './dto/create-publisher.input';
import { UpdatePublisherInput } from './dto/update-publisher.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class PublisherService {
   constructor(private prisma:PrismaService){}
  async create(createPublisherInput: CreatePublisherInput) {
    return await this.prisma.publisher.create({
      data:{
        ...createPublisherInput
      }
    });
  }

  findAll() {
    return this.prisma.publisher.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} publisher`;
  }

  update(id: number, updatePublisherInput: UpdatePublisherInput) {
    return `This action updates a #${id} publisher`;
  }

  remove(id: number) {
    return `This action removes a #${id} publisher`;
  }
}
