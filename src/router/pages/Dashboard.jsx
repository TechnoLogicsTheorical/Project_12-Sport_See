import React, { useContext } from 'react';
import { DataContext } from '../../utils/context/dataProvider.js';

import styled from 'styled-components';

import DailyActivity from '../../components/charts/DailyActivity/index.jsx';
import AverageSessions from '../../components/charts/AverageSessions/index.jsx';
import PerformanceRadar from '../../components/charts/PerformanceRadar/index.jsx';
import Score from '../../components/charts/Score/index.jsx';

import CardInfo from '../../components/CardInfo/index.jsx';

import Calories from '../../assets/icons/user_details/calories.png';
import Proteines from '../../assets/icons/user_details/proteines.png';
import Glucides from '../../assets/icons/user_details/glucides.png';
import Lipides from '../../assets/icons/user_details/lipides.png';


const GeneratedContent = styled.div`
    flex-grow: 1;
    margin: 60px 90px;
    height: 70vh;
    overflow-y: scroll;
`;

const UserDetails = styled.div``;

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

const StatsContainer = styled.div`
    margin-top: 75px;
    display: flex;
`;
const ChartsContainer = styled.div``;

const UserStats = styled.div`
    display: flex;
    flex-direction: column;
    gap: 40px 0;
    border-radius: 5px;
    margin-left: 28px;
`;

const RowCharts = styled.div`
    display: flex;
    margin-top: 30px;
    gap: 30px;
`;

export default function Dashboard() {
    const { userData } = useContext(DataContext);
    const userStatsData = userData.getUserStats();
    return (
        <>
        <GeneratedContent>
            { userData ? (
                <>
                    <UserDetails>
                        <UserHeader>
                            <Greeting>Bonjour <Name>{userData.getFirstName()}</Name></Greeting>
                            <MotivationPhrase>Félicitation ! Vous avez explosé vos objectifs hier 👏</MotivationPhrase>
                        </UserHeader>
                    </UserDetails>

                    <StatsContainer>
                        <ChartsContainer>
                            <DailyActivity data={userData.getActivity()} />

                            <RowCharts>
                                <AverageSessions data={userData.getAverageSessions()} />
                                <PerformanceRadar data={userData.getPerformance()} />
                                <Score data={userData.getScore()} />
                            </RowCharts>
                        </ChartsContainer>
                        <UserStats>
                            <CardInfo
                                value={userStatsData.calorieCount}
                                valueExtension='kCal'
                                category={'Calories'}
                                color='#FF0000'
                                icon={Calories}
                            />

                            <CardInfo
                                value={userStatsData.proteinCount}
                                valueExtension='g'
                                category={'Proteines'}
                                color='#4AB8FF'
                                icon={Proteines}
                            />

                            <CardInfo
                                value={userStatsData.carbohydrateCount}
                                valueExtension='g'
                                category={'Glucides'}
                                color='#F9CE23'
                                icon={Glucides}
                            />

                            <CardInfo
                                value={userStatsData.lipidCount}
                                valueExtension='g'
                                category={'Lipides'}
                                color='#FD5181'
                                icon={Lipides}
                            />
                        </UserStats>
                    </StatsContainer>
                </>
                ): <p>Aucune données existante!</p> }
        </GeneratedContent>
        </>
    )
}