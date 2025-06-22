import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Book } from 'src/book/entities/book.entity';

@ObjectType()
export class Author {
  @Field(()=>Int)
  id:number
  @Field()
  fName:string
  @Field()
  lName:string
  @Field()
  country:string
  @Field()
  city:string
  @Field()
  address:string
  @Field(()=>[Book])
  books?:Book[]
}
