export default class UserDataModel {
    constructor() {
    }

    getFirstName() {
        return this.userInfos.firstName;
    }

    setUserInfos(dataFetched) {
        this.id = dataFetched.id;
        this.userInfos = dataFetched.userInfos;
        this.keyData = dataFetched.keyData;
        this.todayScore = dataFetched.todayScore;
    }

    setActivity(dataFetch) {
        this.activity = {
            sessions: dataFetch.sessions
        }
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