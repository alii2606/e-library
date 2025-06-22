import { Injectable } from '@nestjs/common';
import { CreateAuthorInput } from './dto/create-author.input';
import { UpdateAuthorInput } from './dto/update-author.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AuthorService {

   constructor(private prisma:PrismaService){}
  async create(createAuthorInput: CreateAuthorInput) {
    return await this.prisma.author.create({
      data:{
        ...createAuthorInput
      }
    })
  }

  async findAll() {
    return  await this.prisma.author.findMany();
  }

  findOne(id: number) {
    return `This action returns a #${id} author`;
  }

  update(id: number, updateAuthorInput: UpdateAuthorInput) {
    return `This action updates a #${id} author`;
  }

  remove(id: number) {
    return `This action removes a #${id} author`;
  }
}
