import * as React from 'react';
import styled from 'styled-components';
import { Query, Mutation } from 'react-apollo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { DELETE_USER } from '../lib/mutations';
import { GET_ALL_USERS } from '../lib/queries';

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
    <Query query={GET_ALL_USERS}>
      {({ data, loading }: any) => {
        if (loading) {
          return <p>Loading...</p>;
        }
        return data.users.map((item: Item) => (
          <RowContainer key={item.id}>
            <TextInput>{item.name}</TextInput>
            <TextInput>{item.trip}</TextInput>
            <TextInput>date</TextInput>
            <Mutation mutation={DELETE_USER}>
              {deleteUser => (
                <Button onClick={() => deleteUser(item.id)}>
                  <FontAwesomeIcon icon={faTrashAlt} />
                </Button>
              )}
            </Mutation>
          </RowContainer>
        ));
      }}
    </Query>
  </Grid>
);

export default Entry;
