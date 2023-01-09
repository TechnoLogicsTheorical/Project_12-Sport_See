import axios from 'axios';

async function performRequest(url) {
    try {
        const { data } = await axios.get(url);
        return data.data;
    }
    catch (error) {
        console.error(error);
    }
}

export function fetchUserData(url) {
    return performRequest(url);
}

export function fetchUserActivity(url) {
    return performRequest(url);
}

export function fetchUserPerformance(url) {
    return performRequest(url)
}

export function fetchUserAverageSession(url) {
    return performRequest(url)
}