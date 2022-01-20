import { gql } from "@apollo/client";

//get all users 
export const QUERY_USER = gql`
query user {
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
        description1
        price
        
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

export const QUERY_TICKET = gql`
query ticket($_id: ID!) {
  ticket(_id: $_id) {
    _id
    ticketName
    subheader
    description1
    description2
    description3
    description4
    price
    buttonText
    buttonVariant
  }
}
`;

export const QUERY_TICKETS = gql`
query tickets {
  tickets {
    _id
    ticketName
    subheader
    description1
    description2
    description3
    description4
    price
    buttonText
    buttonVariant
  }
}
`;

export const QUERY_ORDER = gql`
query order($id: ID!) {
  order(_id: $id) {
    purchaseDate
    tickets {
      _id
      ticketName
    }
  }
}
`;

export const QUERY_BANDS = gql`
query bands {
  bands {
    _id
    bandName
    startTime
    endTime
    date
    startTime
  }
}
`;

export const QUERY_CHECKOUT = gql`
  query getCheckout($tickets: [ID]!) {
    checkout(tickets: $tickets) {
      session
    }
  }
`;

