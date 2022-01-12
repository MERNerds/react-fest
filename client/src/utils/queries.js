import { gql } from "@apollo/client";

//get all users 
export const QUERY_USER = gql`
  {
    user {
      firstName
      lastName
      orders {
        _id
        purchaseDate
        products {
          _id
          name
          description
          price
          quantity
        }
      }
    }
  }
`;