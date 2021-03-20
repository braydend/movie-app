import React from "react";
import "./App.css";
import Movies from "./components/Movies";
import UserContext from "./utils/UserContext";
import { useAuth } from "./hooks/useAuth";
import Layout from "./components/Layout";
import ApiProvider from "./utils/ApiProvider";
import { ReactQueryDevtools } from "react-query/devtools";
import ReviewList from "./components/Reviews/ReviewList";

function App() {
  const [user, setUser] = useAuth();

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <ApiProvider>
        <Layout>
          {!user ? <></> : <ReviewList userId={user.uid} />}
          <Movies />
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </ApiProvider>
    </UserContext.Provider>
  );
}

export default App;
