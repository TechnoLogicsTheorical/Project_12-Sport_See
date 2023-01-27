import React from 'react';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header/index.jsx';
import AsideBar from '../components/AsideBar/index.jsx';

import { createGlobalStyle } from 'styled-components';
import styled from 'styled-components';
import DataProvider from '../utils/context/dataProvider.js';

// -------------------------------
// |        Styles Rooting       |
// -------------------------------

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
        --sec-gray-color: #FBFBFB;
        
        --medium-size: 24px;
        --big-size: 48px;
    }
`;

const ContentApp = styled.div`
    display: flex;
    flex-direction: row;
`;

/**

 Route component for sectioning off common root code to each other page piece
 @returns {JSX.Element} Root HTML elements
 @constructor
 */
export default function Root() {
    return (
        <>
            <DataProvider>
                <GlobalStyle />
                <Header />

                <ContentApp>
                    <AsideBar />

                    <Outlet />

                </ContentApp>
            </DataProvider>
        </>
    )
}