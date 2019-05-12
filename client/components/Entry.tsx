import * as React from 'react';
import styled from 'styled-components';
import { Query } from 'react-apollo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

import { GET_ALL_USERS_QUERY } from '../lib/queries';

const Grid = styled.div`
  display: grid;
  grid-template-rows: repeat(auto-fit, minmax(30px, 1fr));
  justify-items: left;
`;

const RowContainer = styled.div`
  display: flex;
  flex-direction: row;
  background: #424242;
  margin: 5px;
  border-radius: 3px;
  box-shadow: 5px 5px 5px #212121;
`;

const TextInput = styled.p`
  color: #ffffff;
  margin: 10px;
`;

const Button = styled.button`
  background: #424242;
  border: #424242;
  color: #ffffff;
  font-size: 20px;
`;

interface Item {
  id: string;
  name: string;
  trip: string;
}

const Entry = () => (
  <Grid>
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
            <Button onClick={() => alert('hi')}>
              <FontAwesomeIcon icon={faTrashAlt} />
            </Button>
          </RowContainer>
        ));
      }}
    </Query>
  </Grid>
);

export default Entry;
