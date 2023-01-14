import { useState, useEffect, createContext } from 'react';

import { fetchData } from '../api.js';
import UserDataModel from '../UserDataModel.js';

export const DataContext = createContext();

export default function DataProvider({ children }) {
    const [userId, setUserId] = useState('18');
    const [userData, setUserData] = useState(null);
    const [useMockedData, setUseMockedData] = useState(true);

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
        <DataContext.Provider value={{
            userData,

            setUserId,

            useMockedData,
            setUseMockedData
        }}>
            { children }
        </DataContext.Provider>
    )
}







