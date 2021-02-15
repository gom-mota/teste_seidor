import React from 'react';
import { Container } from './styles.js';

const Table = (props) => {
    return(
        <Container>
            {props.children}
        </Container>
    )
}

export default Table;