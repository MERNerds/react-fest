import { gql } from "@apollo/client";

//get all users 
export const QUERY_USER = gql`
  {
    user {
      _id
      firstName
      lastName
      email
      orders {
        _id
        purchaseDate
        tickets {
          _id
          ticketName
          description
          price
          quantity
        }
      }
      savedBands {
        _id
        bandName
        startTime
        endTime
        stage
      }
    }
  }
`;

export const QUERY_USERS = gql`
query users {
  users {
    _id
    firstName
    lastName
    email
    savedBands {
      bandName
    }
    orders {
      _id
    }
  }
}
`;

export const QUER_TICKET = gql`
{
  ticket(_id: $_id) {
    _id
    ticketName
    description
    price
    quantity
  }
}
`;

export const QUERY_TICKETS = gql`
query tickets {
  tickets {
    _id
    ticketName
    description
    price
    quantity
  }
}
`;

export const QUERY_ORDER = gql`
{
  order(_id: $_id) {
    purchaseDate{
      _id
      ticketName
    }
  }
}
`;

export const QUERY_BANDS = gql`
{
  bands{
    _id
    bandName
    startTime
    endTime
    date
  }
}
`;

