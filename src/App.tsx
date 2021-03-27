import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Movies from "./components/Movies";
import { useAuth } from "./hooks/useAuth";
import Layout from "./components/Layout";
import ApiProvider from "./utils/ApiProvider";
import { ReactQueryDevtools } from "react-query/devtools";
import ReviewPage from "./components/Reviews/ReviewPage";

function App() {
  const [user, setUser] = useAuth();

  return (
    <ApiProvider>
      <BrowserRouter>
        <Layout>
          {!user ? (
            <></>
          ) : (
            <Switch>
              <Route path="/reviews">
                <ReviewPage userId={user.uid} />
              </Route>
              <Route path="/">
                <Movies />
              </Route>
            </Switch>
          )}
        </Layout>
        <ReactQueryDevtools initialIsOpen={false} />
      </BrowserRouter>
    </ApiProvider>
  );
}

export default App;
