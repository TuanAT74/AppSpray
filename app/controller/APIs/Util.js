import { PermissionsAndroid, Alert, Platform } from 'react-native'
export default class Util {
    static async hasAndroidPermission() {
        const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE

        const hasPermission = await PermissionsAndroid.check(permission)
        if (hasPermission) {
            return true
        }

        const status = await PermissionsAndroid.request(permission)
        return status === 'granted'
    }

    static showError = (error) => {
        Alert.alert(
            'Notification',
            error?.response?.data?.message ??
                error?.message ??
                'An error has occurred. Please try again!'
        )
    }

    static FormatPrice = (yourNumber) => {
        yourNumber = yourNumber
        if (Platform.OS === 'ios') {
            return yourNumber.toLocaleString('it-IT', { style: 'currency' })
        } else {
            return yourNumber.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
        }
    }
}
