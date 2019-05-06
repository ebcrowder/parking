import * as React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';

import { GET_ALL_USERS_QUERY } from '../lib/queries';

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #424242;
`;

const TextInput = styled.p`
  color: #ffffff;
  margin: 10px;
`;

interface Item {
  id: string;
  name: string;
  trip: string;
}

const Entry = () => (
  <Query query={GET_ALL_USERS_QUERY}>
    {({ data, loading }: any) => {
      if (loading) {
        return <p>Loading...</p>;
      }
      return data.users.map((item: Item) => (
        <RowContainer key={item.id}>
          <TextInput>{item.name}</TextInput>
          <TextInput>{item.trip}</TextInput>
          <TextInput>date</TextInput>
        </RowContainer>
      ));
    }}
  </Query>
);

export default Entry;
