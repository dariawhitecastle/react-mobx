import React from 'react';
import { Nav } from './containers/Nav';
import { HomePage } from './containers/HomePage';
import { Repos } from './containers/Repos';
import { Form } from './containers/Form';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';
import { Grommet } from 'grommet';

function App() {
  return (
    <Router>
      <Grommet full>
        <Nav />
        <Route path='/' exact component={HomePage} />
        <Route path='/repos' component={Repos} />
        <Route path='/form' component={Form} />
      </Grommet>
    </Router>
  );
}

export default App;
