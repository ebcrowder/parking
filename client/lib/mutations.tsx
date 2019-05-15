import { gql } from 'apollo-boost';

export const DELETE_USER = gql`
  mutation DELETE_USER($id: String!) {
    deleteUser(id: $id) {
      id
      name
    }
  }
`;

export const CREATE_USER = gql`
  mutation CREATE_USER($name: String!, $trip: String!) {
    createUser(name: $name, trip: $trip) {
      id
      name
      trip
    }
  }
`;
