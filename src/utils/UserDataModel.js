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
    // console.log(date, dateStringDate)
    return dateStringDate;
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
        this.performance = {
            categories: dataFetch.kind,
            valuesWithCategories: dataFetch.data
        }
    }
}