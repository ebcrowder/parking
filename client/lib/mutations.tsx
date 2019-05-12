import { gql } from 'apollo-boost';

export const CREATE_USER_MUTATION = gql`
  mutation CREATE_USER_MUTATION($name: String!, $trip: String!) 
  createUser(name: $name, trip: $trip){
    id
    name
    trip
  }
`;
