import { ObjectType, Field, Int, Float } from '@nestjs/graphql';
import { Author } from 'src/author/entities/author.entity';
import { Publisher } from 'src/publisher/entities/publisher.entity';

@ObjectType()
export class Book {
    
  @Field(()=>Int)
  id:number
  @Field()
  title:string
  @Field()
  type:string
  @Field(()=>Float)
  price:number
  @Field(()=>Author)
  author:Author
  @Field(()=>Publisher)
  publisher:Publisher
}
