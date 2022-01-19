import { gql } from "@apollo/client";

//mutation for login 
export const LOGIN = gql`
mutation login($email: String!, $password: String!) {
  login(email: $email, password: $password) {
    token
    user {
      _id
    }
  }
}
`;

//mutation for signup
export const ADD_USER = gql`
mutation addUser($firstName: String!, $lastName: String!, $email: String!, $password: String!) {
  addUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    token
    user {
      _id
      firstName
      lastName
      email
    }
  }
}
`;

export const ADD_ORDER = gql`
mutation addOrder($tickets: [ID]!) {
  addOrder(tickets: $tickets) {
    _id
    purchaseDate
    tickets {
      _id
      ticketName
      price
    }
  }
}
`;

export const UPDATE_USER = gql`
mutation updateUser($firstName: String, $lastName: String, $email: String, $password: String) {
  updateUser(firstName: $firstName, lastName: $lastName, email: $email, password: $password) {
    firstName
    lastName
    email
  }
}
`;

