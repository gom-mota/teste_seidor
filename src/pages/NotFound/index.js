import React from 'react';

import { Link } from 'react-router-dom';

import { FaFrown } from 'react-icons/fa';

import { Container } from './styles';
import { ButtonPrimary } from '../../components/Button';

const NotFound = () =>{
    return(
        <Container>
            <FaFrown />
            <h1>Página não encontrada!</h1>
            <Link to="/" className="noDecoration">
                <ButtonPrimary>Voltar para o início</ButtonPrimary>
            </Link>
        </Container>
    )
}

export default NotFound;