import React from 'react';

import { Link, useLocation } from 'react-router-dom';
import { ButtonTabPrimary } from '../../components/Button';

import { Container } from './styles.js';

const TabBar = () => {
    const location = useLocation();
    return (
        <Container>
            <Link to="/"  className="noDecoration">
                <ButtonTabPrimary className={location.pathname=="/"?"active":""}>Cálculos IRRF</ButtonTabPrimary>
            </Link>
            <Link to="/employee" className="noDecoration">
                <ButtonTabPrimary className={location.pathname=="/employee"?"active":""}>Funcionários</ButtonTabPrimary>
            </Link>
        </Container>
    )
}

export default TabBar;