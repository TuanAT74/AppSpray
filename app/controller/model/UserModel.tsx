export default class UserModel {
    // id: string = ''
    accessToken: string = ''
    constructor(data?: any) {
        // this.id = data?.id || ''
        this.accessToken = data?.access_token || ''
    }
}
