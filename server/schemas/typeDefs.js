const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Query {
    me: User
    users: [User]
    user(username: String!): User
    ticket(_id: ID): Tickets
    order(_id: ID): Order

  }

  type User {
     _id: ID
     username: String   
     firstName: String
     lastName: String
     email: String
     orders: [Order]
   }
   
   type Auth {
    token: ID!
    user: User
  }

   type Mutation {
     login(email: String!, password: String!): Auth
     addUser(username: String!, email: String!, password: String!): Auth
   }

`;

module.exports = typeDefs;