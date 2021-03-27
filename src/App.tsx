import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Movies from "./components/Movies";
import UserContext from "./utils/UserContext";
import { useAuth } from "./hooks/useAuth";
import Layout from "./components/Layout";
import ApiProvider from "./utils/ApiProvider";
import { ReactQueryDevtools } from "react-query/devtools";
import ReviewPage from "./components/Reviews/ReviewPage";
import WatchlistPage from "./components/Watchlist/WatchlistPage";
import MoviePage from "./components/Movies/MoviePage";

function App() {
  const [user, setUser] = useAuth();

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
                <Route path="/watchlist">
                  <WatchlistPage userId={user.uid} />
                </Route>
                <Route path="/movie/:movieId">
                  <MoviePage />
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
    </UserContext.Provider>
  );
}

export default App;
