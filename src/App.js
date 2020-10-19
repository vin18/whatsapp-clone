import React from 'react';
import { Global } from './styled/Global';
import { StyledBody } from './styled/App';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

const App = () => {
  return (
    <div>
      <Global />

      <StyledBody>
        <Router>
          <Sidebar />
          <Switch>
            <Route exact path='/'>
              <Chat />
            </Route>
            <Route exact path='/rooms/:roomId'>
              <Chat />
            </Route>
          </Switch>
        </Router>
      </StyledBody>
    </div>
  );
};

export default App;
