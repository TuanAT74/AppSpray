export default class UserModel {
    // id: string = ''
    accessToken: string = ''
    id: string = ''
    name: string = ''
    phone: string = ''
    avatar: string = ''
    constructor(data?: any) {
        // this.id = data?.id || ''
        this.accessToken = data?.access_token || ''
        this.id = data?.id
        this.name = data?.name
        this.phone = data?.phone ?? ''
        this.avatar = data?.avatar
    }

    toDictionary() {
        return {
            access_token: this.accessToken,
            id: this.id,
            name: this.name,
            avatar: this.avatar,
            phone: this.phone
        }
    }

    setAvatar(url: string) {
        this.avatar = url
    }
}
