import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Alert,
    ScrollView
} from 'react-native'
import React, { useState } from 'react'
import { useNavigation } from '@react-navigation/native'
import Background from '../background/Background'
import Constants from '../../controller/Constants'
import { Form, TextValidator } from 'react-native-validator-form'
import AwesomeAlert from 'react-native-awesome-alerts'

const validatePhone = (phone) => {
    if (phone.length < 9 || phone.length > 12) {
        return false
    }
    return true
}

const Register = () => {
    const navigation = useNavigation()
    const [phone, setPhone] = useState()

    const handleOnClickRegister = () => {
        if (!phone) {
            Alert.alert('Thông báo', 'Vui lòng nhập số điện thoại')
        } else if (!validatePhone(phone)) {
            Alert.alert('Thông báo', 'Số điện thoại không hợp lệ')
        } else {
            handleOnRegister()
        }
    }

    const handleOnRegister = () => {
        navigation.navigate(Constants.screenName.ConfirmRegister)
    }

    return (
        <View style={styles.container}>
            <Background screen='Background' />
            <ScrollView style={styles.container}>
                <View style={styles.viewRegister}>
                    <Text style={styles.textRegister}>Register</Text>
                    <View style={styles.image}>
                        <Image source={Constants.icons.ic_phone} />
                    </View>
                    <Text style={styles.textInput}>
                        Input Phone Number to Continue the registration
                    </Text>
                    <TouchableOpacity style={styles.button}>
                        <View style={styles.country}>
                            <Image source={Constants.icons.ic_japan} />
                            <Text style={styles.textCountry}>+81</Text>
                        </View>

                        <TextInput
                            style={styles.input}
                            placeholder='+123 456 789'
                            keyboardType='numeric'
                            onChangeText={(text) => setPhone(text)}
                            value={phone}
                        />
                    </TouchableOpacity>
                    <TouchableOpacity
                        disabled={!phone}
                        style={{
                            ...styles.buttonContinue,
                            backgroundColor:
                                phone > 0 ? Constants.color.button : Constants.color.gray
                        }}
                        onPress={() => handleOnClickRegister()}
                    >
                        <Text style={styles.textContinue}>Continue</Text>
                    </TouchableOpacity>
                </View>

                <TouchableOpacity
                    onPress={() => {
                        navigation.navigate(Constants.screenName.Login)
                    }}
                >
                    <Text style={styles.textLogin}>Login</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Register

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewRegister: {
        marginHorizontal: 25,
        marginVertical: 80,
        backgroundColor: Constants.color.white,
        borderRadius: 20,
        marginBottom: 20,
        shadowColor: '#666',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3
    },
    textRegister: {
        fontSize: 24,
        color: Constants.color.black,

        textAlign: 'center',
        marginTop: 37,
        fontFamily: Constants.font.PoppinsSemiBold
    },
    image: {
        alignSelf: 'center',
        marginTop: 30
    },
    textInput: {
        fontSize: 14,
        paddingHorizontal: 40,
        paddingVertical: 20,
        textAlign: 'center',
        color: Constants.color.gray,
        fontFamily: Constants.font.PoppinsMedium
    },
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        paddingHorizontal: 10,
        borderColor: Constants.color.border,
        borderWidth: 1,
        borderRadius: 25,
        marginHorizontal: 20
    },
    country: {
        flexDirection: 'row',
        alignItems: 'center',
        borderRightWidth: 1,
        borderRightColor: Constants.color.border,
        paddingRight: 5,
        paddingVertical: 15
    },
    input: {
        flex: 1,
        fontSize: 14,
        paddingHorizontal: 12,
        fontFamily: Constants.font.PoppinsMedium
    },
    textCountry: {
        fontSize: 14,
        fontFamily: Constants.font.PoppinsMedium,
        color: Constants.color.gray,
        marginLeft: 5
    },
    buttonContinue: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 22,
        marginHorizontal: 20,
        borderRadius: 25,
        backgroundColor: Constants.color.button,
        marginBottom: 23
    },
    textContinue: {
        fontSize: 14,
        fontFamily: Constants.font.PoppinsMedium,
        color: Constants.color.white,
        paddingVertical: 13
    },
    textLogin: {
        fontSize: 14,
        fontFamily: Constants.font.PoppinsMedium,
        color: Constants.color.button,
        textAlign: 'center'
    }
})
