import React from 'react';
import styled from 'styled-components';

const Container = styled.button`
    padding: .25rem, 1rem;
`;

type Props = {
    onClick: () => void;
};

const Button: React.FC<Props> = ({ onClick, children }) => {
    return <Container onClick={onClick}>{children}</Container>
};

export default Button;