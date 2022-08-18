import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput,
    Dimensions,
    ScrollView
} from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import Background from './../background/Background'
import { useNavigation } from '@react-navigation/native'
import Constants from './../../controller/Constants'

const ConfirmRegister = () => {
    const navigation = useNavigation()
    const [timerCount, setTimer] = useState(30)
    const [code1, setCode1] = useState()
    const [code2, setCode2] = useState()
    const [code3, setCode3] = useState()
    const [code4, setCode4] = useState()
    const refCode1 = useRef()
    const refCode2 = useRef()
    const refCode3 = useRef()
    const refCode4 = useRef()
    // const [OTP1, setOTP1] = useState('0')
    // const [OTP2, setOTP2] = useState('0')
    // const [OTP3, setOTP3] = useState('0')
    // const [OTP4, setOTP4] = useState('0')

    const countdown = () => {
        let interval = setInterval(() => {
            setTimer((lastTimerCount) => {
                lastTimerCount <= 1 && clearInterval(interval)
                return lastTimerCount - 1
            })
        }, 1000)
        return () => clearInterval(interval)
    }
    useEffect(() => {
        countdown()
    }, [])

    return (
        <View style={styles.container}>
            <Background screen='Background' />
            <ScrollView>
                <View style={styles.viewConfirm}>
                    <Text style={styles.textConfirm}>Verification</Text>
                    <View style={styles.image}>
                        <Image source={Constants.icons.ic_confirm} />
                    </View>
                    <Text style={styles.textInput}>
                        Please enter the code was sent in your phone number
                    </Text>
                    <View style={styles.viewButton}>
                        <View style={styles.buttonNumber}>
                            <TextInput
                                ref={refCode1}
                                style={{
                                    ...styles.input,
                                    color: !code1 > 0 ? Constants.color.gray : Constants.color.black
                                }}
                                maxLength={1}
                                placeholder='0'
                                keyboardType='numeric'
                                autoFocus={true}
                                onChangeText={(code1) => {
                                    setCode1(code1)
                                    if (code1.length > 0) {
                                        refCode2.current.focus()
                                    }
                                }}
                                value={code1}
                            />
                        </View>
                        <View style={styles.buttonNumber}>
                            <TextInput
                                ref={refCode2}
                                style={{
                                    ...styles.input,
                                    color: !code2 > 0 ? Constants.color.gray : Constants.color.black
                                }}
                                maxLength={1}
                                placeholder='0'
                                keyboardType='numeric'
                                onChangeText={(code2) => {
                                    setCode2(code2)
                                    if (code2.length > 0) {
                                        refCode3.current.focus()
                                    } else if (code2.length == 0) {
                                        refCode1.current.focus()
                                    }
                                }}
                                value={code2}
                            />
                        </View>
                        <View style={styles.buttonNumber}>
                            <TextInput
                                ref={refCode3}
                                maxLength={1}
                                style={{
                                    ...styles.input,
                                    color: !code3 > 0 ? Constants.color.gray : Constants.color.black
                                }}
                                placeholder='0'
                                keyboardType='numeric'
                                onChangeText={(code3) => {
                                    setCode3(code3)
                                    if (code3.length > 0) {
                                        refCode4.current.focus()
                                    } else if (code3.length == 0) {
                                        refCode2.current.focus()
                                    }
                                }}
                                value={code3}
                            />
                        </View>
                        <View style={styles.buttonNumber}>
                            <TextInput
                                ref={refCode4}
                                maxLength={1}
                                style={{
                                    ...styles.input,
                                    color: !code4 > 0 ? Constants.color.gray : Constants.color.black
                                }}
                                placeholder='0'
                                keyboardType='numeric'
                                onChangeText={(code4) => {
                                    setCode4(code4)
                                    if (code4.length == 0) {
                                        refCode3.current.focus()
                                    }
                                }}
                                value={code4}
                            />
                        </View>
                    </View>
                    <TouchableOpacity
                        style={styles.buttonContinue}
                        onPress={() => {
                            navigation.navigate(Constants.screenName.SetPass)
                        }}
                    >
                        <Text style={styles.textContinue}>Continue</Text>
                    </TouchableOpacity>
                </View>
                <Text style={styles.textCount}>{timerCount}</Text>
                <TouchableOpacity
                    disabled={timerCount > 0}
                    onPress={() => {
                        setTimer(30)
                        countdown()
                    }}
                >
                    <Text
                        style={{
                            ...styles.textResend,
                            color: timerCount > 0 ? Constants.color.gray : Constants.color.button
                        }}
                    >
                        Resend
                    </Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default ConfirmRegister

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewConfirm: {
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
    textConfirm: {
        fontSize: 24,
        color: '#000',
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
    buttonNumber: {
        borderColor: Constants.color.border,
        borderWidth: 1,
        width: 60,
        height: 60,
        alignItems: 'center',
        borderRadius: 10,
        justifyContent: 'center',
        marginHorizontal: 8
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
        paddingVertical: 13,
        fontWeight: 'SemiBold'
    },
    input: {
        fontSize: 24,
        textAlign: 'center',
        fontFamily: Constants.font.PoppinsMedium,
        includeFontPadding: false,
        color: Constants.color.black
    },
    viewButton: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    textCount: {
        fontSize: 14,
        fontFamily: Constants.font.PoppinsMedium,
        color: Constants.color.button,
        textAlign: 'center'
    },
    textResend: {
        fontSize: 14,
        fontFamily: Constants.font.PoppinsMedium,
        textAlign: 'center'
    }
})
