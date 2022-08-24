import { Dimensions } from 'react-native'

export default Constants = {
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
        Charge: 'Charge'
    },
    icons: {
        ic_background: require('../assets/images/ic_background.png'),
        ic_spray: require('../assets/images/ic_spray.png'),
        ic_phone: require('../assets/images/ic_phone.png'),
        ic_japan: require('../assets/images/ic_japan.png'),
        ic_confirm: require('../assets/images/ic_confirm.png'),
        ic_security: require('../assets/images/ic_security.png'),
        ic_login: require('../assets/images/ic_login.png'),
        ic_point: require('../assets/images/ic_point.png'),
        ic_qrcode: require('../assets/images/ic_qrcode.png'),
        ic_send: require('../assets/images/ic_send.png'),
        ic_receive: require('../assets/images/ic_receive.png'),
        ic_Restaurant: require('../assets/images/ic_restaurant.png'),
        ic_Fashion: require('../assets/images/ic_fashion.png'),
        ic_Car: require('../assets/images/ic_car.png'),
        ic_Scan: require('../assets/images/ic_scan.png')
    },
    image: {
        img_Shushi: require('../assets/images/img_shushi.png'),
        img_Caffe: require('../assets/images/img_caffe.png'),
        img_Shadow: require('../assets/images/img_shadow.png'),
        img_Seafood: require('../assets/images/img_seafood.png'),
        img_Noodles: require('../assets/images/img_noodles.png')
    },
    color: {
        gray: '#868686',
        white: '#fff',
        black: '#000',
        border: '#CCCCE3',
        button: '#00CEFF',
        buttonHome: '#7879E8'
    },
    font: {
        PoppinsBold: 'Poppins-Bold',
        PoppinsMedium: 'Poppins-Medium',
        PoppinsRegular: 'Poppins-Regular',
        PoppinsSemiBold: 'Poppins-SemiBold',
        PoppinsThin: 'Poppins-Thin'
    },
    baseURL: 'https://nexus-point-dev.test-development.work'
}
