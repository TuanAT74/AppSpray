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
        SetPass: 'SetPass'
    },
    icons: {
        ic_background: require('../assets/images/ic_background.png'),
        ic_spray: require('../assets/images/ic_spray.png'),
        ic_phone: require('../assets/images/ic_phone.png'),
        ic_japan: require('../assets/images/ic_japan.png'),
        ic_confirm: require('../assets/images/ic_confirm.png'),
        ic_security: require('../assets/images/ic_security.png')
    },
    color: {
        gray: '#868686',
        white: '#fff',
        black: '#000',
        border: '#CCCCE3',
        button: '#00CEFF'
    },
    font: {
        PoppinsBold: 'Poppins-Bold',
        PoppinsMedium: 'Poppins-Medium',
        PoppinsRegular: 'Poppins-Regular',
        PoppinsSemiBold: 'Poppins-SemiBold',
        PoppinsThin: 'Poppins-Thin'
    }
}
