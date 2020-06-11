import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import ApiProvider from './utils/ApiProvider';
import Movies from './components/Movies';

function App() {
  return (
    <ApiProvider>
      <Container>
        <Movies />
      </Container>
    </ApiProvider>
  );
}

export default App;
