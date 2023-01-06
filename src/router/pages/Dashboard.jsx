import React from 'react';

import { createGlobalStyle } from 'styled-components';
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

export default function Dashboard() {
    return (
        <>
            <GlobalStyle />
            <Header />
            <AsideBar />
        </>
    )
}