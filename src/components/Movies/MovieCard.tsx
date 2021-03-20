import React, { useContext } from "react";
import { Card, Button } from "react-bootstrap";
import UserContext from "../../utils/UserContext";
import styled from "styled-components";
import { Movie } from "./hooks";

type Props = {
  movie: Movie;
  onSelect: () => void;
  onQuickReview: () => void;
};

const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const MovieCard: React.FC<Props> = ({
  movie: { Title, Poster },
  onSelect,
  onQuickReview,
}) => {
  const { user } = useContext(UserContext);
  const hasPoster = Poster !== "N/A";

  const handleClick = () => {
    onSelect();
  };

  const handleQuickReview = () => {
    onQuickReview();
  };

  return (
    <Card>
      <Card.Header>
        {hasPoster ? (
          <img src={Poster} alt={`${Title} Poster`} />
        ) : (
          "Couldn't find a Poster for this movie"
        )}
      </Card.Header>
      <Card.Body>
        <h2>{Title}</h2>
        <ButtonContainer>
          {user && (
            <Button
              id="quick-review"
              title={`Review ${Title} as ${user?.displayName}`}
              onClick={handleQuickReview}
            >
              +
            </Button>
          )}
          <Button id="review-modal" onClick={handleClick}>
            Reviews
          </Button>
        </ButtonContainer>
      </Card.Body>
    </Card>
  );
};

export default MovieCard;
