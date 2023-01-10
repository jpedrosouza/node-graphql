import { IsEmail } from "class-validator";
import { ObjectType, Field } from "type-graphql";

@ObjectType()
export class UserModel {
    @Field()
    name: string;

    @IsEmail()
    @Field()
    email: string;

    @Field()
    password: string;
}
