import React, { useContext } from 'react';
import { DataContext } from '../../utils/context/dataProvider.js';

import styled from 'styled-components';

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


export default function Dashboard() {
    const { userData } = useContext(DataContext);
    return (
        <>
            { userData ? (
            <UserDetails>
                <UserHeader>
                    <Greeting>Bonjour <Name>{userData.getFirstName()}</Name></Greeting>
                    <MotivationPhrase>Félicitation ! Vous avez explosé vos objectifs hier 👏</MotivationPhrase>
                </UserHeader>
            </UserDetails>
            ): <p>Aucune données existante!</p> }
        </>
    )
}