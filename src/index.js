import React from 'react';
import ReactDOM from 'react-dom/client';

const _ = process.env;
_.API_PORT=8888;
_.API_URL='http://localhost:'+ _.API_PORT;
_.API_USER_ENDPOINT=_.API_URL + '/user';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <h1>Application React !</h1>
        <h2>Debug Config</h2>
        <p>{_.API_USER_ENDPOINT}</p>
    </React.StrictMode>,
);