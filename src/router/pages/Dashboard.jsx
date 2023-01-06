import React from 'react';

import Header from '../../components/Header';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, :before, :after {
        margin: 0;
        padding: 0;
    }

    body {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
    }
    
    :root {
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

        </>
    )
}