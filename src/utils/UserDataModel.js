function _calculateMinMaxKg(data) {
    const minKg = data.sessions.reduce((min, session) => Math.min(min, session.kilogram), Infinity);
    const maxKg = data.sessions.reduce((max, session) => Math.max(max, session.kilogram), -Infinity);
    return {
        minKg: minKg,
        maxKg: maxKg
    }
}

function formatDateToFirstLetterString(day) {
    let date = new Date();
    date.setDate(day)
    date.setMonth((7 - 1));
    date.setFullYear(2020)

    const dateStringDate = date.toLocaleDateString('fr-FR', {weekday:'narrow'})
    return dateStringDate;
}

function reMapAndTranslate(data) {

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
    return data
}

export default class UserDataModel {

    getFirstName() {
        return this.userInfos.firstName;
    }

    getUserStats() {
        return this.keyData;
    }

    getActivity() {
        return this.activity;
    }

    getAverageSessions() {
        return this.averageSessions;
    }

    getPerformance() {
        return this.performance;
    }

    setUserInfos(dataFetched) {
        this.id = dataFetched.id;
        this.userInfos = dataFetched.userInfos;
        this.keyData = dataFetched.keyData;
        this.todayScore = dataFetched.todayScore;
    }

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

    setAverageSessions(dataFetch) {
        this.averageSessions = {
            data: dataFetch.sessions.map((object) => {
                return {
                    ...object,
                    day: formatDateToFirstLetterString(object.day),
                }
            })
        }
    }

    setPerformance(dataFetch) {
        const categories = reMapAndTranslate(dataFetch.kind);

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