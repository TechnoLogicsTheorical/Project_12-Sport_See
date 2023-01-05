import React from 'react';
import fetchUserData from '../../utils/getDatas.js';
import { useEffect, useState} from 'react';

function Debug() {
    const [userData, setUserData] = useState(null);
    const [haveError, setError] = useState();

    useEffect(() => {
        async function getData() {
            const requestResult = await fetchUserData('14');
            if ( requestResult.hasOwnProperty('data') ) {
                setUserData(requestResult.data);
            } else setError(requestResult)
        }
        getData();
    }, [])

    console.log(userData);

    return (
        <>
            <h1>API Results : </h1>
            <div>
                {haveError ? (
                    haveError
                ) : userData ? (
                    <ul>
                        {Object.keys(userData).map((key) => {
                            if (typeof userData[key] === "object") {
                                return (
                                    <li>
                                        {key}:
                                        <ul>
                                            {Object.keys(userData[key]).map((innerKey) => (
                                                <li>{innerKey}: {userData[key][innerKey]}</li>
                                            ))}
                                        </ul>
                                    </li>
                                );
                            }
                            return <li>{key}: {userData[key]}</li>;
                        })}
                    </ul>
                ) : (
                    <p>Loading...</p>
                )}
            </div>
        </>
    )
}

export default Debug;