import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field()
  userName :string
  @Field()
  password:string
  @Field()
  fName:string
  @Field()
  lName:string
  @Field()
  isManager:boolean
}

