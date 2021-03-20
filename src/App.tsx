import React from 'react';
import './App.css';
import Movies from './components/Movies';
import UserContext from './utils/UserContext';
import { useAuth } from './hooks/useAuth';
import Layout from './components/Layout';

function App() {
  const [user, setUser] = useAuth();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <Layout>
        <Movies />
      </Layout>
    </UserContext.Provider>
  );
}

export default App;
