function _calculateMinMaxKg(data) {
    const minKg = data.sessions.reduce((min, session) => Math.min(min, session.kilogram), Infinity);
    const maxKg = data.sessions.reduce((max, session) => Math.max(max, session.kilogram), -Infinity);
    return {
        minKg: minKg,
        maxKg: maxKg
    }
}

export default class UserDataModel {

    getFirstName() {
        return this.userInfos.firstName;
    }

    getActivity() {
        return this.activity;
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
            sessions: dataFetch.sessions
        }
    }

    setPerformance(dataFetch) {
        this.performance = {
            categories: dataFetch.kind,
            valuesWithCategories: dataFetch.data
        }
    }
}