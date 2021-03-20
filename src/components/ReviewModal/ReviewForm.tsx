import React, { useState, useContext } from "react";
import { InputGroup, Button, FormControl, Alert } from "react-bootstrap";
import ReactStars from "react-stars";
import UserContext from "../../utils/UserContext";
import { useFormValidation } from "../../hooks/useFormValidation";
import validateCreateReview from "../../utils/validators/validateReview";
import { useCreateReview } from "./hooks";

type Props = {
  id: string;
  Title: string;
  onAfterReview: () => void;
};

type FormType = {
  message: string;
  score: number;
};

const INITIAL_STATE: FormType = {
  message: "",
  score: 0,
};

const ReviewForm: React.FC<Props> = ({ id, Title, onAfterReview }) => {
  const { user } = useContext(UserContext);
  const [error, setError] = useState<string>();
  const [busy, setBusy] = useState(false);
  const { mutate } = useCreateReview();

  const handleReview = async () => {
    setBusy(true);
    setError(undefined);
    const { score, message } = values;

    if (!user) throw Error("User is not defined");
    mutate({ score, message, title: Title, IMDBId: id, user });
    onAfterReview();
    setBusy(false);
  };

  const {
    handleSubmit,
    handleChange,
    values,
    errors,
  } = useFormValidation<FormType>(
    INITIAL_STATE,
    validateCreateReview,
    handleReview
  );

  const allErrors: string[] = error
    ? [error, ...Object.values<string>(errors)]
    : Object.values<string>(errors);
  const hasErrors = allErrors.length > 0;

  return (
    <>
      {hasErrors && <Alert variant="danger">{allErrors.join(" ")}</Alert>}
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <InputGroup.Text>
            <ReactStars
              count={5}
              half={false}
              onChange={(score) => handleChange({}, "score", score)}
              value={values.score}
            />
          </InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl
          as="textarea"
          aria-label="Review message"
          id="message"
          value={values.message}
          onChange={handleChange}
        />
      </InputGroup>
      {user ? (
        <Button onClick={handleSubmit} disabled={busy}>
          {values.score === 0
            ? "Click a star rating to leave a review"
            : `Leave ${values.score} star Review`}
        </Button>
      ) : (
        <Button variant="warning" disabled>
          You must be logged in to leave a review
        </Button>
      )}
    </>
  );
};

export default ReviewForm;
