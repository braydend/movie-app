import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import GraphQLApiProvider from './utils/GraphQLApiProvider';
import Movies from './components/Movies';
import UserContextProvider from './utils/UserContext';

function App() {
  return (
    <GraphQLApiProvider>
      <UserContextProvider>
        <Container>
          <Movies />
        </Container>
      </UserContextProvider>
    </GraphQLApiProvider>
  );
}

export default App;
