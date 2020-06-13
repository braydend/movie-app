import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import GraphQLApiProvider from './utils/GraphQLApiProvider';
import Movies from './components/Movies';

function App() {
  return (
    <GraphQLApiProvider>
      <Container>
        <Movies />
      </Container>
    </GraphQLApiProvider>
  );
}

export default App;
