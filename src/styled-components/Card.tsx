import React from 'react';
import styled from 'styled-components';

type Variant = 'default' | 'red';

type Props = {
    variant?: Variant;
};

const getBorderColourForVarirant = (variant: Variant): string => {
    switch(variant) {
        case 'red': return '#e63946';
        case 'default': return '#457b9d';
    }
};

const Card: React.FC<Props> = ({ children, variant = 'default' }) => {
    const Container = styled.div`
        background-color: #f1faee;
        color: #1d3557;
        padding: 1rem;
        border: 2px solid ${getBorderColourForVarirant(variant)};
        border-radius: 4px;
    `;

    return <Container>{children}</Container>
};

export default Card;