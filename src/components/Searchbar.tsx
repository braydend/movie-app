import React, { ChangeEvent } from 'react';
import { FormControl, InputGroup } from 'react-bootstrap';

type SearchbarProps = {
    query: string;
    onChange: (x: string) => void;
};

const Searchbar = ({ query, onChange }: SearchbarProps) => {
    const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        onChange(value);
    };

    return (
        <InputGroup className="mb-3">
            <InputGroup.Prepend>
                <InputGroup.Text id="basic-addon1">Search for a movie:</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl value={query} onChange={handleChange} />
        </InputGroup>
    );
};

export default Searchbar;