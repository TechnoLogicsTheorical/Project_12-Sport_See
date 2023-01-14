import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import { DataContext } from '../../utils/context/dataProvider.js';

import styled from 'styled-components';

const Container = styled.div`
    margin: 60px;
`;

const Title = styled.h1`
    margin: 20px auto;
`;

export default function Home() {
    const { userData, setUserId, useMockedData, setUseMockedData } = useContext(DataContext);

    function toggleMockData() {
        setUseMockedData(!useMockedData);
    }

    function handleChangeUserId(userId) {
        setUserId(userId);
    }

    return (
        <Container>

            <Title>Choix utilisateurs</Title>
            <button onClick={() => handleChangeUserId('12')}>Karl</button>
            <button onClick={() => handleChangeUserId('18')}>Cecilia</button>
            <div>
                {/* Afficher les données de l'utilisateur avec l'identifiant userId en utilisant le mode d'affichage useMockedData */}
                Les données de : <strong>{userData && userData.getFirstName()}</strong> sont actuellement disponible !
            </div>

            <Title>Mode de l'api</Title>
            <button onClick={() => toggleMockData()}>
                {useMockedData ? "Utiliser l'API réelle" : "Utiliser les données mockées" }
            </button>

            <Title>Basculer vers le Dashboard</Title>
            <Link to={'/dashboard'} >Aller</Link>

        </Container>
    );
}