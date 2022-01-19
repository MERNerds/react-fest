const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    password: String
    savedBands: [Band]
    orders: [Order]
  }

  type Band {
    _id: ID!
    bandName: String!
    startTime: String
    endTime: String
    date: String
    stage: String
  }

  type Order {
    _id: ID!
    purchaseDate: String
    tickets: [Ticket]
  }

  type Ticket {
    _id: ID!
    ticketName: String
    subheader: String
    description1: String
    description2: String
    description3: String
    description4: String
    price: Float
    buttonText: String
    buttonVariant: String
  }

  type Auth {
    token: ID
    user: User
  }

  type Query {
    user: User
    users: [User]
    band(bandId: ID!): Band
    bands: [Band]
    order(_id: ID!): Order
    ticket(_id: ID!): Ticket
    tickets: [Ticket]
    checkout(tickets: [ID]!): Checkout 
  }

  type Mutation {
    addUser(firstName: String!, lastName: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addOrder(tickets: [ID]!): Order
    updateUser(firstName: String, lastName: String, email: String, password: String): User
  }

  type Checkout {
    session: ID
  }
`;

module.exports = typeDefs;

    // updateTicket(_id: ID!, quantity: Int!): Ticket 
    // addBand(_id: ID!): User
    // removeBand(_id: ID!): User