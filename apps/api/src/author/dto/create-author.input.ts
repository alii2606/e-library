import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAuthorInput {
   @Field()
    fName:string;
    @Field()
    lName:string;
    @Field()
    country:string;
    @Field()
    city:string;
    @Field()
    address:string;
    
}
