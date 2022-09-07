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
        store: CommonAPIs.baseURL + '/api/list-store-parent-category'
    }

    static headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }

    static async login(phone, password) {
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
            // console.log('id', id)
            let response = await axios.get(CommonAPIs.endpoints.store + `?parent_id=${id}`, {
                headers
            })
            return Promise.resolve(response.data.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
}
