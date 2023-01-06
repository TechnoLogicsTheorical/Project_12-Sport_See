import axios from 'axios';

const port = '8888';
const url = 'http://localhost:' + port;
const userEndpoint = url + '/user/';

class NoIdentifiant extends Error {
    constructor() {
        super();
        this.name = 'No Identifiant';
        this.code = 'ERR_NO_IDENTIFIANT';
        this.message = 'You need to transmit a string identifiant'
    }
}

/**
 *
 * @param {Error} error An Object transmitted by the catch instruction
 * @param {string} personalisedMessage Message written for details
 * @returns {JSX.Element} An HTML Code Showed in page Content
 */
function getErrorHTML(error, personalisedMessage) {
    return (
        <>
            <h2>La requête à échoué, et n'a pas pu être complétée</h2>
            <p>{personalisedMessage}</p>
            <h3>Détails de l'erreur :</h3>
            <ul>
                <li>Type de l'erreur : {error.name}</li>
                <li>Code : {error.code}</li>
                <li>Message: {error.message}</li>
            </ul>
        </>
    );
}

/**
 * Function called Axios Library to make an request with API user endpoint : /user
 * @param {string} id User identifiant with number
 * @returns {Promise<string|any>}
 */
export default async function fetchUserData(id) {
    try {
        if (id === undefined) {
            throw new NoIdentifiant();
        }
        const request = await axios.get(userEndpoint + id);
        return request.data;
    } catch (error) {
        if (error.code === 'ERR_NETWORK') {
            return getErrorHTML(error, 'Vérifier si le serveur est bien lancée en Back-end !');
        }
        else if (error.code === 'ERR_BAD_REQUEST') {
            return getErrorHTML(error, 'Vérifier l\'<u>URL</u> ou l\'<u>id</u> envoyée ! Qui doit être conforme à <strong>/user/:id</strong>');
        }
        else if ( error.code === 'ERR_NO_IDENTIFIANT') {
            return getErrorHTML(error, 'Veuillez transmettre un identifiant dans la requête ! Qui doit être conforme à <strong>/user/:id</strong>');
        }
        else {
            console.log(error);
            return 'Une erreur non gérée est survenue !';
        }
    }
}