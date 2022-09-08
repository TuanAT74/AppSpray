import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Alert
} from 'react-native'
import React, { useState } from 'react'
import Background from './../common/Background'
import Constants from './../../controller/Constants'
import Icon from 'react-native-vector-icons/Ionicons'
import LinearGradient from 'react-native-linear-gradient'
import { useNavigation } from '@react-navigation/native'
import CommonAPIs from '../../controller/APIs/CommonAPIs'
import RNProgressHud from 'progress-hud'

import StorageManager from './../../controller/APIs/StorageManager'

const Login = () => {
    const navigation = useNavigation()
    const [passWord, setPassWord] = useState('123456')
    const [checkPassWord, setCheckPassWord] = useState(true)
    const [phone, setPhone] = useState('813924234')

    const handleLogin = () => {
        if (!phone) {
            Alert.alert('Notification', 'Please enter the phone number')
            return
        } else if (phone.length < 9 || phone.length > 12) {
            Alert.alert('Notification', 'invalid phone number')
            return
        } else if (!passWord) {
            Alert.alert('Notification', 'Please enter a password')
            return
        }
        RNProgressHud.show()
        CommonAPIs.login(phone, passWord)
            .then((res) => {
                navigation.navigate(Constants.screenName.TabBarNavigation)
            })
            .catch((err) => {
                Alert.alert(err.response.data.message)
            })
            .finally(() => {
                RNProgressHud.dismiss()
            })
    }

    return (
        <View style={styles.container}>
            <Background color={Constants.color.white} />
            <ScrollView style={styles.container}>
                <View style={styles.viewLogin}>
                    <Text style={styles.textLogin}>Login</Text>
                    <View style={styles.image}>
                        <Image source={Constants.icons.ic_login} style={styles.icon} />
                    </View>
                    <Text style={styles.textInput}>Type Phone Number and Password to Continue</Text>
                    <View style={styles.buttonPassword}>
                        <TextInput
                            keyboardType='numeric'
                            style={styles.textPassword}
                            placeholder='Phone Number'
                            onChangeText={setPhone}
                            value={phone}
                        />
                    </View>
                    <View style={styles.buttonPassword}>
                        <TextInput
                            type='password'
                            style={styles.textPassword}
                            placeholder=' Password'
                            onChangeText={setPassWord}
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
                    <TouchableOpacity onPress={handleLogin}>
                        <LinearGradient
                            colors={['#26F1FF', '#DF98EB', '#FF88E8']}
                            style={styles.linearGradient}
                            start={{ x: 0, y: 0.5 }}
                            end={{ x: 1.8, y: 0 }}
                        >
                            <Text style={styles.textButtonLogin}>Sign in</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity
                    onPress={() => {
                        navigation.push(Constants.screenName.Register)
                    }}
                >
                    <Text style={styles.textRegister}>Register</Text>
                </TouchableOpacity>
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
        color: Constants.color.black,
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
        fontFamily: Constants.font.PoppinsMedium
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
        fontFamily: Constants.font.PoppinsMedium,
        paddingVertical: 8
    },
    linearGradient: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 22,
        marginHorizontal: 20,
        borderRadius: 25,
        marginBottom: 23
    },
    textRegister: {
        fontSize: 14,
        fontFamily: Constants.font.PoppinsMedium,
        color: Constants.color.gray,
        textAlign: 'center',
        textDecorationLine: 'underline',
        color: Constants.color.button
    },
    textButtonLogin: {
        fontSize: 14,
        fontFamily: Constants.font.PoppinsMedium,
        color: Constants.color.white,
        textAlign: 'center',
        paddingVertical: 13
    },
    icon: {
        width: 130,
        height: 140
    }
})
