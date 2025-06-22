import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Book } from 'src/book/entities/book.entity';

@ObjectType()
export class Publisher {
  @Field(()=>Int)
    id:number
    @Field()
    pName:string
    @Field()
    city:string
    @Field(()=>[Book])
    books?:Book[]
}
