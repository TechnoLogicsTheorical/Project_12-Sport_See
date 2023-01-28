/**
 * A helper function that calculates the minimum and maximum kilograms in the sessions data.
 * @param {Object} data - The data containing the sessions.
 * @returns {Object} An object containing the minimum and maximum kilograms.
 * @private
 * @memberof UserDataModel
 * @instance
 */
function _calculateMinMaxKg(data) {
    const minKg = data.sessions.reduce((min, session) => Math.min(min, session.kilogram), Infinity);
    const maxKg = data.sessions.reduce((max, session) => Math.max(max, session.kilogram), -Infinity);
    return {
        minKg: minKg,
        maxKg: maxKg
    }
}

/**
 * A helper function that formats the date to a string of the first letter of the weekday.
 * @param {number} day - The day of the date.
 * @returns {string} A string of the first letter of the weekday.
 * @private
 * @memberof UserDataModel
 * @instance
 */
function _formatDateToFirstLetterString(day) {
    let date = new Date();
    date.setDate(day)
    date.setMonth((7 - 1));
    date.setFullYear(2020)

    return date.toLocaleDateString('fr-FR', {weekday: 'narrow'});
}

/**
 * A helper function that calculates the minimum and maximum kilogram from the sessions data.
 * @param {Object} data - an object containing sessions
 * @returns {Object} an object containing minKg and maxKg
 * @private
 * @memberof UserDataModel
 * @instance
 */
function _reMapAndTranslate(data) {
    for (const categoryKey in data) {
        const string = data[categoryKey];
        const categoryText = string.charAt(0).toUpperCase() + string.slice(1);
        let finalString = '';

        switch (categoryText) {
            case 'Energy':
                finalString = 'Energie';
                break;
            case 'Speed':
                finalString = 'Vitesse';
                break;
            case 'Intensity':
                finalString = 'Intensité';
                break;
            case 'Strength':
                finalString = 'Force';
                break;
            default:
                finalString = categoryText;
        }
        data[categoryKey] = finalString;
    }
    return data;
}
// ---------------------------------------------------

/**
 * UserDataModel is a class that provides an interface for managing and manipulating user data.
 * @class UserDataModel
 */
export default class UserDataModel {
    /**
     * Returns the first name of the user.
     * @returns {string} The first name of the user.
     * @memberof UserDataModel
     * @instance
     */
    getFirstName() {
        return this.userInfos.firstName;
    }

    /**
     * Returns user's statistics.
     * @returns {Object} The user's statistics.
     * @memberof UserDataModel
     * @instance
     */
    getUserStats() {
        return this.keyData;
    }

    /**
     * Returns user's activity information.
     * @returns {Object} The user's activity information, including the minimum and maximum kilograms and the data of the sessions.
     * @memberof UserDataModel
     * @instance
     */
    getActivity() {
        return this.activity;
    }

    /**
     * Returns average sessions information.
     * @returns {Object} The average sessions information, including data of the sessions.
     * @memberof UserDataModel
     * @instance
     */
    getAverageSessions() {
        return this.averageSessions;
    }

    /**
     * Returns performance information.
     * @returns {Object} The performance information, including data of the performance.
     * @memberof UserDataModel
     * @instance
     */
    getPerformance() {
        return this.performance;
    }

    /**
     * Returns score information.
     * @returns {Object} The score information, including data of the score.
     * @memberof UserDataModel
     * @instance
     */
    getScore() {
        return this.score;
    }

    /**
     * Sets user information.
     * @param {Object} dataFetched - The data fetched from an API or other source.
     * @memberof UserDataModel
     * @instance
     */
    setUserInfos(dataFetched) {
        this.id = dataFetched.id;
        this.userInfos = dataFetched.userInfos;
        this.keyData = dataFetched.keyData;
        this.score = {
            data: [
                {
                    name: "maximum",
                    value: 1,
                    fill: "transparent"
                },
                {
                    name: 'unknow',
                    value: dataFetched.todayScore,
                    fill: '#FF0000',
                }
            ],
            valueInPercent: dataFetched.todayScore * 100,
        };
    }

    /**
     * Sets user's activity information.
     * @param {Object} dataFetch - The data fetched from an API or other source.
     * @memberof UserDataModel
     * @instance
     */
    setActivity(dataFetch) {
        const {minKg, maxKg} = _calculateMinMaxKg(dataFetch);

        this.activity = {
            minKg,
            maxKg,
            data: dataFetch.sessions.map((object) => {
                return {
                    ...object,
                    day: new Date(object.day).getDate(),
                }
            })
        };
    }

    /**
     * Sets user's average sessions information.
     * @param {Object} dataFetch - The data fetched from an API or other source.
     * @memberof UserDataModel
     * @instance
     */
    setAverageSessions(dataFetch) {
        this.averageSessions = {
            data: dataFetch.sessions.map((object) => {
                return {
                    ...object,
                    day: _formatDateToFirstLetterString(object.day),
                }
            })
        }
    }

    /**
     * Sets user's performance information.
     * @param {Object} dataFetch - The data fetched from an API or other source.
     * @memberof UserDataModel
     * @instance
     */
    setPerformance(dataFetch) {
        const categories = _reMapAndTranslate(dataFetch.kind);

        this.performance = {
            data: dataFetch.data.map((object) => {
                return {
                    value: object.value,
                    category: categories[object.kind]
                }
            })
        }
    }
}