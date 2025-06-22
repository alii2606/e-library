import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthInput {
  
      @Field()
      userName:string
      @Field()
      password:string
  }

