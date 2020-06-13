import React from 'react';
import { HttpLink, ApolloClient, InMemoryCache } from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const link = new HttpLink({
    uri: 'https://graphql.fauna.com/graphql',
    headers: {
      Authorization: `Bearer ${process.env.REACT_APP_FAUNADB_KEY}`,
    },
  });
  
  const client = new ApolloClient({
    link: link,
    cache: new InMemoryCache(),
  });

const ApiProvider: React.FC = ({ children }) => (
    <ApolloProvider client={client}>
        {children}
    </ApolloProvider>
);

export default ApiProvider;