import { Dimensions } from 'react-native'

export default Constants = {
    baseURL: 'https://nexus-point-dev.test-development.work',
    screen: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    },
    screenName: {
        Home: 'Home',
        Login: 'Login',
        Register: 'Register',
        Background: 'Background',
        ConfirmRegister: 'ConfirmRegister',
        SetPass: 'SetPass',
        TabBarNavigation: 'TabBarNavigation',
        History: 'History',
        Scan: 'Scan',
        ChangeProfile: 'ChangeProfile',
        Convert: 'Convert',
        StoreDetail: 'StoreDetail',
        SuccessTransaction: 'SuccessTransaction',
        SendPoint: 'SendPoint',
        RemittanceAmount: 'RemittanceAmount',
        PaymentDetails: 'PaymentDetails'
    },
    icons: {
        background: require('../assets/images/ic_background.png'),
        spray: require('../assets/images/ic_spray.png'),
        phone: require('../assets/images/ic_phone.png'),
        japan: require('../assets/images/ic_japan.png'),
        confirm: require('../assets/images/ic_confirm.png'),
        security: require('../assets/images/ic_security.png'),
        login: require('../assets/images/ic_login.png'),
        point: require('../assets/images/ic_point.png'),
        qrcode: require('../assets/images/ic_qrcode.png'),
        send: require('../assets/images/ic_send.png'),
        receive: require('../assets/images/ic_receive.png'),
        restaurant: require('../assets/images/ic_restaurant.png'),
        fashion: require('../assets/images/ic_fashion.png'),
        car: require('../assets/images/ic_car.png'),
        scan: require('../assets/images/ic_scan.png'),
        gallery: require('../assets/images/ic_gallery1.png'),
        light: require('../assets/images/ic_light1.png'),
        help1: require('../assets/images/ic_help1.png'),
        factor: require('../assets/images/ic_factor.png'),
        profile: require('../assets/images/ic_profile.png'),
        payment: require('../assets/images/ic_payment.png'),
        setting: require('../assets/images/ic_setting.png'),
        service: require('../assets/images/ic_service.png'),
        help: require('../assets/images/ic_help.png'),
        logout: require('../assets/images/ic_logout.png'),
        right: require('../assets/images/ic_right.png'),
        gps: require('../assets/images/ic_gps.png'),
        balance: require('../assets/images/ic_Balance.png'),
        sendPink: require('../assets/images/ic_sendpink.png'),
        divider: require('../assets/images/ic_divider.png'),
        download: require('../assets/images/ic_download.png'),
        left: require('../assets/images/ic_left.png')
    },
    image: {
        shushi: require('../assets/images/img_shushi.png'),
        caffe: require('../assets/images/img_caffe.png'),
        shadow: require('../assets/images/img_shadow.png'),
        seafood: require('../assets/images/img_seafood.png'),
        noodles: require('../assets/images/img_noodles.png'),
        avatar: require('../assets/images/img_avatar.png'),
        qrcode: require('../assets/images/img_qrcode.png'),
        storeDetail: require('../assets/images/img_StoreDetail.png'),
        successTransaction: require('../assets/images/img_SuccessTransaction.png'),
        complete: require('../assets/images/img_complete.png')
    },
    color: {
        gray: '#868686',
        white: '#fff',
        black: '#000',
        border: '#CCCCE3',
        button: '#00CEFF',
        buttonHome: '#7879E8',
        backgScan: 'rgba(0, 0, 0, 0.2)',
        backgroundHome: '#F7F7F7'
    },
    font: {
        PoppinsBold: 'Poppins-Bold',
        PoppinsMedium: 'Poppins-Medium',
        PoppinsRegular: 'Poppins-Regular',
        PoppinsSemiBold: 'Poppins-SemiBold',
        PoppinsThin: 'Poppins-Thin',
        HKGroteskRegular: 'HKGrotesk-Regular'
    },
    keys: {
        currentUser: 'currentUser'
    },
    allCategory: {
        id: 0,
        parent_name: 'All'
    },
    QRCodeType: {
        app: 'NexusPoint',
        phone: 0,
        wallet: 1
    },
    tokenError: new Error('AccessToken does not exist!')
}
