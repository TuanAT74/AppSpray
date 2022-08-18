import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import React, { useState } from 'react'
import Background from './../background/Background'
import Constants from './../../controller/Constants'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'

const Login = () => {
    const [passWord, setPassWord] = useState()
    const [confirmPassWord, setConfirmPassWord] = useState()
    const [checkPassWord, setCheckPassWord] = useState(true)
    const [checkPassWordConfirm, setCheckPassWordConfirm] = useState(true)
    return (
        <View style={styles.container}>
            <Background screen='Background' />
            <ScrollView style={styles.container}>
                <View style={styles.viewLogin}>
                    <Text style={styles.textLogin}>Login</Text>
                    <View style={styles.image}>
                        <Image source={Constants.icons.ic_login} />
                    </View>
                    <Text style={styles.textInput}>Type Phone Number and Password to Continue</Text>
                    <View style={styles.buttonPassword}>
                        <TextInput
                            type='password'
                            style={styles.textPassword}
                            placeholder='Phone'
                            onChangeText={(passWord) => setPassWord(passWord)}
                            value={passWord}
                            secureTextEntry={checkPassWord}
                        />
                        <TouchableOpacity onPress={() => setCheckPassWord(!checkPassWord)}>
                            <Icon
                                name={!checkPassWord ? 'eye-outline' : 'eye-off-outline'}
                                size={20}
                                color={Constants.color.gray}
                            />
                        </TouchableOpacity>
                    </View>
                    <View style={styles.buttonPassword}>
                        <TextInput
                            type='password'
                            style={styles.textPassword}
                            placeholder=' Password'
                            onChangeText={(confirmPassWord) => setConfirmPassWord(confirmPassWord)}
                            value={confirmPassWord}
                            secureTextEntry={checkPassWordConfirm}
                        />
                        <TouchableOpacity
                            onPress={() => setCheckPassWordConfirm(!checkPassWordConfirm)}
                        >
                            <Icon
                                name={!checkPassWordConfirm ? 'eye-outline' : 'eye-off-outline'}
                                size={20}
                                color={Constants.color.gray}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.buttonLogin}>
                        <Image source={Constants.icons.ic_buttonLogin} />
                        <Text style={styles.textButtonLogin}>Login</Text>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity>
                    <Text style={styles.textRegister}>Forgot Password</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textLogin: {
        fontSize: 24,
        color: '#000',
        textAlign: 'center',
        marginTop: 37,
        fontFamily: Constants.font.PoppinsSemiBold
    },
    viewLogin: {
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
        fontFamily: 'Poppins-Medium'
    },
    buttonPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 10,
        paddingHorizontal: 15,
        borderColor: Constants.color.border,
        borderWidth: 1,
        borderRadius: 25,
        marginHorizontal: 20
    },
    textPassword: {
        flex: 1,
        fontSize: 14,
        fontFamily: Constants.font.PoppinsMedium
    },
    buttonLogin: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 22,
        marginHorizontal: 20,
        borderRadius: 25,
        marginBottom: 23
    },
    textButtonLogin: {
        ...StyleSheet.absoluteFillObject,
        fontSize: 14,
        fontFamily: Constants.font.PoppinsMedium,
        color: Constants.color.white,
        textAlign: 'center',
        paddingVertical: 10
    },
    textRegister: {
        fontSize: 14,
        fontFamily: 'Poppins-Medium',
        color: Constants.color.gray,
        textAlign: 'center'
    }
})
