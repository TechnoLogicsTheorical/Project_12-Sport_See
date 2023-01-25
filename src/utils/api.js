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

export function fetchData(url) {
    return performRequest(url);
}