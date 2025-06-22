import { Injectable } from '@nestjs/common';
import { CreateBookInput } from './dto/create-book.input';
import { UpdateBookInput } from './dto/update-book.input';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookService {

  constructor(private prisma:PrismaService){}
    async create(createBookInput: CreateBookInput) {
      return await this.prisma.book.create({
         data:{
          title:createBookInput.title,
          price:createBookInput.price,
          type:createBookInput.type,
          author:{
            connect:{
              id:createBookInput.authorId
            }
          },
          publisher:{
            connect:{
              id:createBookInput.pubId
            }
          }
         }
      })
    }

  async findAll() {
    return this.prisma.book.findMany(
      {
        include:{
          author:true,
          publisher:true
        },
      }
    );
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: number, updateBookInput: UpdateBookInput) {
    return `This action updates a #${id} book`;
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
