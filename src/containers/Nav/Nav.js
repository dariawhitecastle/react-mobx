import React, { useState, Fragment } from 'react';
import { Box, Button, Text, Grid } from 'grommet';
import { Route, NavLink } from 'react-router-dom';
import { HomePage } from '../HomePage';
import { Repos } from '../Repos';
import { Form } from '../Form';

const Nav = () => {
  const [ sidebar, showSidebar ] = useState(true);
  const routes = [
    {
      id: 1,
      name: 'Home',
      path: '/',
      exact: true,
      main: () => <HomePage />
    },
    {
      id: 2,
      name: 'Repos',
      path: '/repos',
      main: () => <Repos />
    },
    {
      id: 3,
      name: 'Form',
      path: '/form',
      main: () => <Form />
    }
  ];
  return (
    <Fragment>
      <Grid
        fill
        rows={[ 'auto', 'flex' ]}
        columns={[ 'auto', 'flex' ]}
        areas={[
          { name: 'header', start: [ 0, 0 ], end: [ 1, 0 ] },
          { name: 'sidebar', start: [ 0, 1 ], end: [ 0, 1 ] },
          { name: 'main', start: [ 1, 1 ], end: [ 1, 1 ] }
        ]}>
        <Box
          elevation='small'
          gridArea='header'
          direction='row'
          align='center'
          justify='between'
          pad={{ horizontal: 'medium', vertical: 'small' }}
          background='dark-2'>
          <Button onClick={() => showSidebar(!sidebar)}>
            <Text size='large'>Title</Text>
          </Button>
          <Text>my@email</Text>
        </Box>
        {sidebar && (
          <Box
            elevation='small'
            gridArea='sidebar'
            background='dark-3'
            width='small'
            animation={[
              { type: 'fadeIn', duration: 300 },
              {
                type: 'slideRight',
                size: 'xlarge',
                duration: 150
              }
            ]}>
            {routes.map(({ id, name, path }) => (
              <Box
                key={id}
                pad={{
                  horizontal: 'medium',
                  vertical: 'small'
                }}>
                <NavLink to={path}>
                  <Button label={name} plain />
                </NavLink>
              </Box>
            ))}
          </Box>
        )}
        <Box gridArea='main' justify='center' align='center'>
          {routes.map(({ id, path, exact, main }) => (
            <Route key={id} path={path} exact={exact} component={main} />
          ))}
        </Box>
      </Grid>
    </Fragment>
  );
};

export default Nav;
