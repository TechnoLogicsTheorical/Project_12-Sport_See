import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

import styled, { createGlobalStyle } from 'styled-components';
import Header from '../../components/Header';
import AsideBar from '../../components/AsideBar/index.jsx';
import { fetchData } from '../../utils/api.js';

const GlobalStyle = createGlobalStyle`
    *, :before, :after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }
    
    :root {
        --black-color: #020203;
        --white-color: #FFFFFF;
        --red-color: #FF0101;
        --gray-color: #74798C;
        
        --medium-size: 24px;
        --big-size: 48px;
    }
`;

const ContentApp = styled.div`
    display: flex;
    flex-direction: row;
`;

const UserDetails = styled.div`
    flex-grow: 1;
    margin: 60px 90px;
`;

// -------------------------------
// |        User Greeting        |
// -------------------------------
const Greeting = styled.h1`
    font-size: var(--big-size);
    margin-bottom: 40px;
`;

const Name = styled.span`
    color: var(--red-color);
`;

const UserHeader = styled.div``;

const MotivationPhrase = styled.p``;

class UserDataModel {
    constructor() {
    }

    getFirstName() {
        return this.userInfos.firstName;
    }

    setUserInfos(dataFetched) {
        this.id = dataFetched.id;
        this.userInfos = dataFetched.userInfos;
        this.keyData = dataFetched.keyData;
        this.todayScore = dataFetched.todayScore;
    }

    setActivity(dataFetch) {
        this.activity = {
            sessions: dataFetch.sessions
        }
    }

    setAverageSessions(dataFetch) {
        this.averageSessions = {
            sessions: dataFetch.sessions
        }
    }

    setPerformance(dataFetch) {
        this.performance = {
            categories: dataFetch.kind,
            valuesWithCategories: dataFetch.data
        }
    }
}

export default function Dashboard() {
    const [userData, setUserData] = useState(null);

    async function getData(userId, endpoint) {
        const baseUrl = '/mocked_datas/users';

        const completeURI = `${baseUrl}/${userId}/${endpoint}.json`
        return await fetchData(completeURI);
    }

    async function fetchAndFormatData(userId) {
        const userDatas = new UserDataModel();

        const userData = await getData(userId, 'mainData');
        userDatas.setUserInfos(userData);

        const averageSessions = await getData(userId,'average-sessions');
        userDatas.setAverageSessions(averageSessions);

        const activity = await getData(userId,'activity');
        userDatas.setActivity(activity);

        const performanceData = await getData(userId,'performance');
        userDatas.setPerformance(performanceData);

        setUserData(userDatas);
    }

    useEffect(() => {
        fetchAndFormatData('18');
    }, [getData])

    // ----------------------------------
    return (
        <>
            <GlobalStyle />
            <Header />

            <ContentApp>
                <AsideBar />
                { userData ? (
                <UserDetails>
                    <UserHeader>
                        <Greeting>Bonjour <Name>{userData.getFirstName()}</Name></Greeting>
                        <MotivationPhrase>Félicitation ! Vous avez explosé vos objectifs hier 👏</MotivationPhrase>
                    </UserHeader>
                </UserDetails>
                ): <p>Loading data...</p> }
            </ContentApp>
        </>
    )
}  