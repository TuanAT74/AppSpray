import axios from 'axios'
import AppManager from './AppManager'
import Constants from '../Constants'

export default class TransactionAPIs {
    static baseURL = Constants.baseURL

    static endpoints = {
        sendPoint: TransactionAPIs.baseURL + '/api/send-point',
        paymentDetails: TransactionAPIs.baseURL + '/api/payment-detail'
    }

    static headers = {
        'Content-Type': 'application/json',
        Accept: 'application/json'
    }

    static async sendPoint(phone: string, amount: string, type_use = 1, code_transaction = '') {
        try {
            if (!AppManager.shared.isHaveAccessToken()) {
                return Promise.reject(Constants.tokenError)
            }
            const data = {
                phone,
                amount_point: amount,
                type_use,
                code_transaction
            }
            const headers = {
                ...this.headers,
                Authorization: `Bearer ${AppManager.shared.currentUser?.accessToken}`
            }
            let response = await axios.post(TransactionAPIs.endpoints.sendPoint, data, { headers })
            return Promise.resolve(response.data?.data)
        } catch (error) {
            console.log(error?.response)
            return Promise.reject(error)
        }
    }

    static async getPaymentDetails(phone: string, amount: string) {
        try {
            if (!AppManager.shared.isHaveAccessToken()) {
                return Promise.reject(Constants.tokenError)
            }
            const data = {
                phone,
                amount_point: amount
            }
            const headers = {
                ...this.headers,
                Authorization: `Bearer ${AppManager.shared.currentUser?.accessToken}`
            }
            console.log('1', data)
            console.log('2', TransactionAPIs.endpoints.paymentDetails)

            let response = await axios.post(TransactionAPIs.endpoints.paymentDetails, data, {
                headers
            })
            console.log('gh', response.data)
            return Promise.resolve(response.data?.data)
        } catch (error) {
            console.log('er')

            return Promise.reject(error)
        }
    }
}
