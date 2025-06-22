import { InputType, Int, Field, Float } from '@nestjs/graphql';

@InputType()
export class CreateBookInput {
 
  @Field()
  title:string;
  @Field()
  type:string;
  @Field(()=>Float)
  price:number;
  @Field(() => Int)
  authorId:number;
  @Field(() => Int)
  pubId:number;
}
