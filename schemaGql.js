import {gql } from "apollo-server";

const typeDefs = gql`
  type Query{
    users:[User]
  }
  type User{
    _id:ID!
    firstName:String!
    lastName:String!
    email:String!
    password: String!
  }
  type Mutation{
    signupUser(userNew: UserInput!): User
  }

  input UserInput {
    firstName: String!
    lastName: String!
    email: String!
    password: String!
  }
`;

export default typeDefs;