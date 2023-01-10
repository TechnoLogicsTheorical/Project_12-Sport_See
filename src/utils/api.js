import axios from 'axios';

async function performRequest(url) {
    try {
        const { data } = await axios.get(url);
        return data.data;
    }
    catch (error) {
        // Todo: Gérer les erreur renvoyées par Axios pour retourner un message dans l'interface
        console.error(error);
    }
}

export function fetchData(url) {
    return performRequest(url);
}