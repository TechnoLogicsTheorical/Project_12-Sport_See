import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { DataContext } from '../../utils/context/dataProvider.js';

import styled from 'styled-components';

const Container = styled.div`
    margin: 60px;
`;

const UserButton = styled.button`
    background-color: cornflowerblue;
    color: white;
    padding: 12px 18px;
    margin: 0 20px;
    border-radius: 5px;
    border: none;
`;

const ModeButton = styled.button`
    background-color: mediumseagreen;
    padding: 12px 18px;
    border: none;
    border-radius: 5px;
`;

const Title = styled.h1`
    margin: 20px auto;
`;

const StatusContainer = styled.div`
    margin: 10px;
    padding: 10px 25px;
    border-radius: 5px;
    border: 1px solid gray;
    background-color: lightgray;
`;

export default function Home() {
    const navigate = useNavigate();
    const { setUserId, useMockedData, setUseMockedData } = useContext(DataContext);
    function toggleMockData() {
        setUseMockedData(!useMockedData);
    }

    function handleChangeUserId(userId) {
        setUserId(userId);
        navigate('/dashboard');
    }

    return (
        <Container>

            <Title>Choix utilisateurs</Title>
            <UserButton onClick={() => handleChangeUserId('12')}>🧒 Karl</UserButton>
            <UserButton onClick={() => handleChangeUserId('18')}>👩 Cecilia</UserButton>

            <Title>Mode de l'api</Title>
            <StatusContainer>
                Les données utilisées sont celle : {useMockedData ? "des données Mockées" : "de L'API"}
            </StatusContainer>

            <ModeButton onClick={() => toggleMockData()}>
                {useMockedData ? "Utiliser l'API réelle" : "Utiliser les données mockées" }
            </ModeButton>

        </Container>
    );
}