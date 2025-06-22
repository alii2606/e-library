import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Auth {
  
    @Field()
    userName:string
    @Field()
    isManager:boolean
}

