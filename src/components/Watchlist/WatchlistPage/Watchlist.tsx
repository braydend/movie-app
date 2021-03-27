import React from "react";
import { CardGroup, ListGroup } from "react-bootstrap";
import { Watchlist as WatchlistType } from "../../../types";
import WatchlistItem from "./WatchlistItem";

type Props = {
  watchlist: WatchlistType;
};

const Watchlist: React.FC<Props> = ({ watchlist }) => {
  return (
    <CardGroup>
      {watchlist.map((item) => (
        <WatchlistItem data={item} />
      ))}
    </CardGroup>
  );
};

export default Watchlist;
