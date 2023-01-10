import { Arg, FieldResolver, Mutation, Query, Resolver, Root } from "type-graphql";
import { CreateUserInput } from "../dtos/inputs/create-user-input";
import { UserModel } from "../dtos/models/user-model";
import { OrderModel } from "../dtos/models/order-model";

@Resolver(() => UserModel)
export class UserResolver {
  @Query(() => [UserModel])
  async users() {
    return [{
      name: 'John Doe',
      email: 'email@email.com',
      password: '123456789',
    }];
  }

  @Mutation(() => UserModel)
  async createUser(@Arg("data") data: CreateUserInput) {
    const user = {
      name: data.name,
      email: data.email,
      password: data.password,
    }

    return user;
  }

  @FieldResolver(() => [OrderModel])
  async orders(@Root() user: UserModel) {
    return [{
      id: 1,
      userId: 1,
      status: 1,
      createdAt: new Date(),
      updatedAt: new Date(),
    }]
  }
}