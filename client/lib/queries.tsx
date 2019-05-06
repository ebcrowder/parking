import { gql } from 'apollo-boost';

export const GET_ALL_USERS_QUERY = gql`
  query getAllUsers {
    users {
      id
      name
      trip
    }
  }
`;
