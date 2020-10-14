import React from 'react';
import { Global } from './styled/Global';
import { StyledBody } from './styled/App';
import Sidebar from './components/Sidebar';
import Chat from './components/Chat';

const App = () => {
  return (
    <div>
      <Global />

      <StyledBody>
        <Sidebar />
        <Chat />
      </StyledBody>
    </div>
  );
};

export default App;
