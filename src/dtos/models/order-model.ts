import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class OrderModel {
    @Field()
    id: number;

    @Field()
    userId: number;

    @Field()
    status: number;

    @Field()
    createdAt: Date;

    @Field({nullable: true})
    updatedAt: Date;
}