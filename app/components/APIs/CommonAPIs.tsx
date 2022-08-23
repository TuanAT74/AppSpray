import axios from 'axios'
import Constants from './../../controller/Constants'

export default class CommonAPIs {
    static baseURL = Constants.baseURL

    static endpoints = {
        login: CommonAPIs.baseURL + '/api/login',
        register: CommonAPIs.baseURL + '/api/register',
        veryPhone: CommonAPIs.baseURL + '/api/verify-phone',
        setPassword: CommonAPIs.baseURL + '/api/confirm-password'
    }

    static headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }

    static async login(phone, password) {
        try {
            const headers = {
                ...this.headers
            }
            let data = {
                phone,
                password
            }
            let response = await axios.post(CommonAPIs.endpoints.login, data, { headers })

            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
    static async register(phone) {
        try {
            const headers = {
                ...this.headers
            }
            let data = {
                phone
            }
            let response = await axios.post(CommonAPIs.endpoints.register, data, { headers })

            return Promise.resolve(response.data)
        } catch (error) {
            return Promise.reject(error)
        }
    }
    static async veryPhone(phone, code) {
        try {
            const headers = {
                ...this.headers
            }
            let data = {
                phone,
                verification_code: code
            }
            let response = await axios.post(CommonAPIs.endpoints.veryPhone, data, { headers })

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
}
