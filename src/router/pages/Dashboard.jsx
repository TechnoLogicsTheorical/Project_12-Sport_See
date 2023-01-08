import React from 'react';

import styled, { createGlobalStyle } from 'styled-components';
import Header from '../../components/Header';
import AsideBar from '../../components/AsideBar/index.jsx';

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

const MotivationPhrase = styled.p`
    
`;

export default function Dashboard() {
    return (
        <>
            <GlobalStyle />
            <Header />

            <ContentApp>
                <AsideBar />
                <UserDetails>
                    <UserHeader>
                        <Greeting>Bonjour, <Name>Thomas</Name></Greeting>
                        <MotivationPhrase>Félicitation ! Vous avez explosé vos objectifs hier 👏</MotivationPhrase>
                    </UserHeader>
                </UserDetails>
            </ContentApp>
        </>
    )
}  