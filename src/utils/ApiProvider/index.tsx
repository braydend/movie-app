import React from "react";
import { QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const ApiProvider: React.FC = ({ children }) => {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};

export default ApiProvider;
