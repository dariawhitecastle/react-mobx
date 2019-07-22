import React, { useContext, useState } from 'react';
import { observer } from 'mobx-react';
import { Box, Heading, Form } from 'grommet';
import { ReposContext } from '../../stores/ReposStore';
import { StyledFormField, StyledButton } from './HomePage.styles';

const HomePage = observer(() => {
  const reposStore = useContext(ReposContext);
  const { getRepos, repos } = reposStore;
  console.log('REPOS', repos);
  const [ searchTerm, setSearchTerm ] = useState('');
  return (
    <Box>
      <Heading level='2'>HomePage</Heading>
      <Form onSubmit={() => getRepos(searchTerm)}>
        <Box direction='row' align='center'>
          <StyledFormField
            name='username'
            label='Username'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <StyledButton
            primary
            label='Get repos'
            alignSelf='end'
            type='submit'
          />
        </Box>
      </Form>
    </Box>
  );
});

export default HomePage;
