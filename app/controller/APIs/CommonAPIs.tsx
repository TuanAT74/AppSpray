import axios from 'axios'

import StorageManager from './StorageManager'
import Constants from './../Constants'
import AppManager from './AppManager'
import UserModel from '../model/UserModel'

export default class CommonAPIs {
    static baseURL = Constants.baseURL

    static endpoints = {
        login: CommonAPIs.baseURL + '/api/login',
        register: CommonAPIs.baseURL + '/api/register',
        veryPhone: CommonAPIs.baseURL + '/api/verify-phone',
        setPassword: CommonAPIs.baseURL + '/api/confirm-password',
        category: CommonAPIs.baseURL + '/api/list-parent-category',
        store: CommonAPIs.baseURL + '/api/list-store-parent-category',
        updateProfile: CommonAPIs.baseURL + '/api/setup-profile',
        userProfile: CommonAPIs.baseURL + '/api/user-profile',
        sendPoint: CommonAPIs.baseURL + 'api/send-point'
    }

    static headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }

    static async login(phone, password) {
        clg
        try {
            let data = {
                phone,
                password
            }
            let response = await axios.post(CommonAPIs.endpoints.login, data, {
                headers: this.headers
            })
            // StorageManager.setData(Constants.keys.currentUser, {
            //     access_token: response.data.access_token
            // })
            AppManager.shared.currentUser = new UserModel({
                access_token: response.data.access_token
            })
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async register(phone) {
        try {
            let data = {
                phone
            }
            let response = await axios.post(CommonAPIs.endpoints.register, data, {
                headers: this.headers
            })
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async veryPhone(phone, code) {
        try {
            let data = {
                phone,
                verification_code: code
            }
            let response = await axios.post(CommonAPIs.endpoints.veryPhone, data, {
                headers: this.headers
            })
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async setPass(phone, password, token) {
        try {
            const headers = {
                ...this.headers,
                Authorization: `Bearer ` + token
            }
            let data = {
                phone,
                password
            }
            let response = await axios.post(CommonAPIs.endpoints.setPassword, data, { headers })
            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async category() {
        try {
            const headers = {
                ...this.headers,
                Authorization: `Bearer ` + AppManager.shared.isHaveAccessToken()
            }

            let response = await axios.get(CommonAPIs.endpoints.category, { headers })
            return Promise.resolve(response.data.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async store(id) {
        try {
            const headers = {
                ...this.headers,
                Authorization: `Bearer ` + AppManager.shared.isHaveAccessToken()
            }
            let response = await axios.get(CommonAPIs.endpoints.store + `?parent_id=${id}`, {
                headers
            })
            return Promise.resolve(response.data.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async updateProfile(data) {
        try {
            if (!AppManager.shared.isHaveAccessToken()) {
                return Promise.reject(Constants.tokenError)
            }
            const headers = {
                ...this.headers,
                Authorization: `Bearer ${AppManager.shared.currentUser?.accessToken}`
            }
            let response = await axios.put(CommonAPIs.endpoints.updateProfile, data, { headers })
            let user = new UserModel(response.data?.data)
            user.accessToken = AppManager.shared.currentUser?.accessToken
            AppManager.shared.currentUser = user
            StorageManager.setData(Constants.keys.currentUser, user.toDictionary())
            return Promise.resolve(response.data?.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async updateAvatar(avatar_file) {
        try {
            const imageData = {
                uri: avatar_file?.path,
                // type: avatar_file?.type,
                type: 'multipart/form-data',
                name:
                    avatar_file?.filename ||
                    Math.floor(Math.random() * Math.floor(999999999)) + '.jpg'
            }
            const formData = new FormData()
            formData.append('avatar', imageData)
            formData.append('_method', 'PUT')
            const headers = {
                Authorization: `Bearer ${AppManager.shared.currentUser?.accessToken}`,
                'Content-Type': 'multipart/form-data'
            }

            let response = await axios.post(CommonAPIs.endpoints.updateProfile, formData, {
                headers
            })
            let user = new UserModel(response.data?.data)
            user.accessToken = AppManager.shared.currentUser?.accessToken
            AppManager.shared.currentUser = user
            StorageManager.setData(Constants.keys.currentUser, user.toDictionary())
            return Promise.resolve(user)
        } catch (error) {
            return Promise.reject(error)
        }
    }

    static async getUserProfile() {
        try {
            if (!AppManager.shared.isHaveAccessToken()) {
                return Promise.reject(Constants.tokenError)
            }
            const headers = {
                ...this.headers,
                Authorization: `Bearer ${AppManager.shared.currentUser?.accessToken}`
            }
            let response = await axios.get(CommonAPIs.endpoints.userProfile, { headers })
            let user = new UserModel(response.data?.data)
            user.accessToken = AppManager.shared.currentUser?.accessToken
            AppManager.shared.currentUser = user
            StorageManager.setData(Constants.keys.currentUser, user.toDictionary())
            return Promise.resolve(user)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}
