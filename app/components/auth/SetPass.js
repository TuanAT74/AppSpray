import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import React, { useState, useEffect } from 'react'
import Background from './../common/Background'
import Constants from './../../controller/Constants'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation, useRoute } from '@react-navigation/native'
import CommonAPIs from './../APIs/CommonAPIs'
import RNProgressHud from 'progress-hud'

const SetPass = () => {
    const navigation = useNavigation()
    const [passWord, setPassWord] = useState()
    const [confirmPassWord, setConfirmPassWord] = useState()
    const [checkPassWord, setCheckPassWord] = useState(true)
    const [checkPassWordConfirm, setCheckPassWordConfirm] = useState(true)
    const route = useRoute()
    const accessToken = route.params.accessToken
    const phone = route.params.phone
    console.log('accessToken', accessToken, phone)

    const handleSetPassWord = () => {
        if (passWord !== confirmPassWord) {
            alert('Mật khẩu không khớp')
            return
        } else if (!passWord) {
            alert('Vui lòng nhập mật khẩu')
            return
        }
        RNProgressHud.showWithStatus('Loading...')

        CommonAPIs.setPass(phone, passWord, accessToken)
            .then((res) => {
                navigation.navigate(Constants.screenName.Login)
            })
            .catch((err) => {
                alert(err.response.data.message)
            })
            .finally(() => {
                RNProgressHud.dismiss()
            })
    }

    return (
        <View style={styles.container}>
            <Background />
            <ScrollView style={styles.container}>
                <View style={styles.viewSetPassWord}>
                    <Text style={styles.text}> SET YOUR PASSWORD</Text>
                    <View style={styles.image}>
                        <Image source={Constants.icons.ic_security} />
                    </View>
                    <Text style={styles.textInput}>Input new password</Text>
                    <View style={styles.buttonPassword}>
                        <TextInput
                            type='password'
                            style={styles.textPassword}
                            placeholder='Password'
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
                            placeholder=' ConfirmPassword'
                            onChangeText={(confirmPassWord) => setConfirmPassWord(confirmPassWord)}
                            value={confirmPassWord}
                            secureTextEntry={checkPassWordConfirm}
                        />
                        <TouchableOpacity
                            onPress={() => setCheckPassWordConfirm(!checkPassWordConfirm)}
                        >
                            <Icon
                                name={!checkPassWordConfirm ? 'ios-eye' : 'eye-off-outline'}
                                size={20}
                                color={Constants.color.gray}
                            />
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity style={styles.buttonSetup} onPress={handleSetPassWord}>
                        <Text style={styles.textSetup}>Setup</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default SetPass

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text: {
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
    buttonPassword: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
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
    viewSetPassWord: {
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
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 3
    },
    buttonSetup: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 22,
        marginHorizontal: 20,
        borderRadius: 25,
        backgroundColor: Constants.color.button,
        marginBottom: 23
    },
    textSetup: {
        fontSize: 14,
        fontFamily: Constants.font.PoppinsMedium,
        color: Constants.color.white,
        paddingVertical: 13
    }
})
