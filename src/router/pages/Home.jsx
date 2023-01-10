import React, { useState, useEffect } from 'react';

import styled from 'styled-components';

import UserDataModel from '../../utils/UserDataModel.js';
import { fetchData } from '../../utils/api.js';
import { Link } from 'react-router-dom';

const Container = styled.div`
    margin: 60px;
`;

const Title = styled.h1`
    margin: 20px auto;
`;

export default function Home() {
    const [userId, setUserId] = useState('18');
    const [userData, setUserData] = useState(null);

    const [useMockedData, setUseMockedData] = useState(true);

    function toggleMockData() {
        setUseMockedData(!useMockedData);
    }

    function handleChangeUserId(userId) {
        setUserId(userId);
    }

    async function getData(endpoint) {
        let baseUrl = '';
        let completeURI = '';

        if (useMockedData === false) {
            baseUrl = 'http://localhost:3333/user';

            switch (endpoint) {
                case 'mainData':
                    completeURI = `http://localhost:3333/user/${userId}`;
                    break;
                case 'activity':
                    completeURI = `http://localhost:3333/user/${userId}/activity`;
                    break;
                case 'average-sessions':
                    completeURI = `http://localhost:3333/user/${userId}/average-sessions`;
                    break;
                case 'performance':
                    completeURI = `http://localhost:3333/user/${userId}/performance`;
                    break;
                default:
                    console.error('Cas non gérée !')
                    break;
            }
        }
        else {
            baseUrl = '/mocked_datas/users';
            completeURI = `${baseUrl}/${userId}/${endpoint}.json`;
        }

        return await fetchData(completeURI);
    }

    async function fetchAndFormatData() {
        const userDatas = new UserDataModel();

        const userData = await getData('mainData');
        userDatas.setUserInfos(userData);

        const averageSessions = await getData('average-sessions');
        userDatas.setAverageSessions(averageSessions);

        const activity = await getData('activity');
        userDatas.setActivity(activity);

        const performanceData = await getData('performance');
        userDatas.setPerformance(performanceData);

        setUserData(userDatas);
    }

    useEffect(() => {
        fetchAndFormatData();
    }, [userId, useMockedData])
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
            <button onClick={toggleMockData}>
                {useMockedData ? "Utiliser l'API réelle" : "Utiliser les données mockées" }
            </button>

            <Title>Basculer vers le Dashboard</Title>
            <Link to={'/dashboard'} >Aller</Link>

        </Container>
    );
}