import React from 'react';

import Employee from '../Employee';

import { Container } from './styles';

const Home = () =>{
    return(
        <Container>
            <h1>Teste Técnico Prático - SEIDOR</h1>
            <Employee />
        </Container>
        
    );
};

export default Home;