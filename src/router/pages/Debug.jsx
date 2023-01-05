import React from 'react';

function Debug() {
    const port = '8888';
    const url = 'http://localhost:' + port;
    const userEndpoint = url + '/user';

    return (
        <>
            <h1>API adress :</h1>
            <p>{userEndpoint}</p>
        </>
    )
}

export default Debug;