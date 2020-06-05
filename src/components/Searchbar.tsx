import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

type SearchbarProps = {
    query: string;
    onChange: (x: string) => void;
};

const Input = styled.input`
    width: 100%;
    border-radius: 4px;
    line-height: 1.5rem;
    font-size: 1.5rem;
`;
Input.displayName = 'Input';

const Searchbar = ({ query, onChange }: SearchbarProps) => {
    const handleChange = ({ target: { value } }: ChangeEvent<HTMLInputElement>) => {
        onChange(value);
    };

    return (
        <div>
            <label>Search for a movie:</label>
            <Input value={query} onChange={handleChange} />
        </div>
    );
};

export default Searchbar;