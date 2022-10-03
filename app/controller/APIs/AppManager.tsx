import UserModel from './../model/UserModel'

export default class AppManager {
    static shared = new AppManager()

    currentUser: UserModel = null

    isHaveAccessToken = () => {
        return this.currentUser?.accessToken
    }
}
