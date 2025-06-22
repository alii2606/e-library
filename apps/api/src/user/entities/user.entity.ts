import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int)
  id: number
  @Field()
  userName:string
  @Field()
  password:string
  @Field()
  fName:string
  @Field()
  lName:string
  @Field(()=>Boolean)
  isManager:boolean
}

