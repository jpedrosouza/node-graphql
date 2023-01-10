import { IsEmail } from "class-validator";
import { InputType, Field } from "type-graphql";

@InputType()
export class CreateUserInput {
    @Field()
    name: string;

    @IsEmail()
    @Field()
    email: string;

    @Field()
    password: string;
}
