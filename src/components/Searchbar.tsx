import React, { ChangeEvent, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";

type SearchbarProps = {
  onChange: (x: string) => void;
  value: string;
};

const Searchbar = ({ onChange, value }: SearchbarProps) => {
  const [query, setQuery] = useState(value);

  const handleChange = ({
    target: { value },
  }: ChangeEvent<HTMLInputElement>) => {
    setQuery(value);
    onChange(value);
  };

  return (
    <InputGroup className="mb-3 mt-3">
      <InputGroup.Prepend>
        <InputGroup.Text id="basic-addon1">Search for a movie:</InputGroup.Text>
      </InputGroup.Prepend>
      <FormControl value={query} onChange={handleChange} />
    </InputGroup>
  );
};

export default Searchbar;
