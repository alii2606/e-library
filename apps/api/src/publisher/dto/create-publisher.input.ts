import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePublisherInput {
     @Field()
    pName:string;
     @Field()
     city:string;
}
