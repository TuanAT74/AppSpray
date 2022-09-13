import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'

import { Switch } from 'react-native-paper'

import Constants from '../../controller/Constants'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Background from './../common/Background'
import AppManager from '../../controller/APIs/AppManager'
import CommonAPIs from './../../controller/APIs/CommonAPIs'

const Profile = () => {
    const [isModalVisible, setModalVisible] = useState(false)
    const [dataQR, setDataQR] = useState([])
    const [isSwitchOn, setIsSwitchOn] = useState(false)
    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn)
    const navigation = useNavigation()
    const [profile, setProfile] = useState()

    const getAvatar = () => {
        if (
            AppManager.shared.currentUser?.avatar != null &&
            AppManager.shared.currentUser?.avatar !== ''
        ) {
            return { uri: AppManager.shared.currentUser?.avatar }
        }
        return Constants.image.img_Avatar
    }

    const getUserProfile = () => {
        CommonAPIs.getUserProfile()
            .then((data) => {
                setProfile(data)
            })
            .catch((error) => console.log(error))
    }

    useEffect(() => {
        getUserProfile()
    }, [])

    return (
        <>
            <ScrollView style={styles.container}>
                <Background hideLogo={true} color='#F7F7F7' />
                <View style={styles.viewProfile}>
                    <Text style={styles.textProfile}>PROFILE</Text>
                    <TouchableOpacity>
                        <Icon name='ios-notifications' size={30} color={Constants.color.white} />
                    </TouchableOpacity>
                </View>
                <View style={styles.boxProfile}>
                    <Image source={getAvatar()} style={styles.imgAvatar} />
                    <View style={styles.boxInforUser}>
                        <Image source={Constants.image.img_Qrcode} style={styles.imgQrcode} />
                        <View style={styles.inforUser}>
                            <Text style={styles.textUser}>Jonathan Doe</Text>
                            <Text style={styles.textPhone}>No.0912-339-3493</Text>
                        </View>
                    </View>
                    <View style={styles.boxQrCode}>
                        <TouchableOpacity style={styles.buttonQr}>
                            <Image
                                source={Constants.image.img_Qrcode}
                                style={styles.imgQrcodeInButton}
                            />
                            <View style={styles.boxTextQr}>
                                <Text style={styles.textOnQr}>NexusPoint</Text>
                                <Text style={styles.textQr}>QR Code</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.buttonQr}>
                            <Image
                                source={Constants.image.img_Qrcode}
                                style={styles.imgQrcodeInButton}
                            />
                            <View style={styles.boxTextQr}>
                                <Text style={styles.textOnQr}>NEXToken</Text>
                                <Text style={styles.textQr}>QR Code</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View>
                    <TouchableOpacity style={{ ...styles.button, justifyContent: 'space-between' }}>
                        <View style={styles.boxIconText}>
                            <Image source={Constants.icons.ic_Factor} style={styles.icButton} />
                            <Text style={styles.textButton}>2 Factor Authentication</Text>
                        </View>
                        <View>
                            <Switch
                                value={isSwitchOn}
                                onValueChange={onToggleSwitch}
                                color='#7879E8'
                                style={{ marginRight: 15 }}
                            />
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{ ...styles.button, justifyContent: 'space-between' }}
                        onPress={() => {
                            navigation.push(Constants.screenName.ChangeProfile)
                        }}
                    >
                        <View style={styles.boxIconText}>
                            <Image source={Constants.icons.ic_Profile} style={styles.icButton} />
                            <Text style={styles.textButton}>Change Profile</Text>
                        </View>
                        <Image source={Constants.icons.ic_Right} style={styles.ic_Right} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.button, justifyContent: 'space-between' }}>
                        <View style={styles.boxIconText}>
                            <Image source={Constants.icons.ic_Payment} style={styles.icButton} />
                            <Text style={styles.textButton}>Payment History</Text>
                        </View>
                        <Image source={Constants.icons.ic_Right} style={styles.ic_Right} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.button, justifyContent: 'space-between' }}>
                        <View style={styles.boxIconText}>
                            <Image source={Constants.icons.ic_Setting} style={styles.icButton} />
                            <Text style={styles.textButton}>Setting</Text>
                        </View>
                        <Image source={Constants.icons.ic_Right} style={styles.ic_Right} />
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.button, justifyContent: 'space-between' }}>
                        <View style={styles.boxIconText}>
                            <Image source={Constants.icons.ic_Service} style={styles.icButton} />
                            <Text style={styles.textButton}>Terms of Services</Text>
                        </View>
                        <Image source={Constants.icons.ic_Right} style={styles.ic_Right} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.button}>
                        <Image source={Constants.icons.ic_Help} style={styles.icButton} />
                        <Text style={styles.textButtonLight}>Help & Support</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ ...styles.button, marginBottom: 20 }}>
                        <Image source={Constants.icons.ic_Logout} style={styles.icButton} />
                        <Text style={styles.textButtonLight}>Logout</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    boxProfile: {
        backgroundColor: Constants.color.white,
        alignItems: 'center',
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 1
    },
    boxInforUser: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '85%',
        borderBottomWidth: 1,
        borderColor: Constants.color.border
    },
    imgAvatar: {
        marginTop: 35,
        marginBottom: 13,
        width: 70,
        height: 70,
        borderRadius: 20
    },
    imgQrcode: {
        width: 23,
        height: 23,
        marginLeft: 30
    },
    inforUser: {
        // marginLeft: 25
        alignItems: 'center',
        marginHorizontal: 20
    },
    textUser: {
        fontSize: 20,
        fontFamily: Constants.font.PoppinsSemiBold,
        textAlign: 'center',
        color: Constants.color.black
    },
    textPhone: {
        fontSize: 14,
        fontFamily: Constants.font.PoppinsMedium
    },
    boxQrCode: {
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: 'space-between'
        // marginHorizontal: 5
    },
    buttonQr: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: Constants.color.border,
        paddingHorizontal: 15,
        paddingVertical: 5,
        marginHorizontal: 5
    },
    boxTextQr: {
        marginLeft: 10
    },
    textOnQr: {
        fontSize: 10,
        fontFamily: Constants.font.PoppinsSemiBold,
        color: Constants.color.black
    },
    textQr: {
        fontSize: 16,
        fontFamily: Constants.font.PoppinsSemiBold,
        color: Constants.color.black
    },
    button: {
        flexDirection: 'row',
        marginHorizontal: 20,
        backgroundColor: Constants.color.white,
        alignItems: 'center',
        marginTop: 20,
        borderRadius: 10,
        shadowRadius: 20
    },
    textButton: {
        marginVertical: 18,
        marginLeft: 12,
        fontSize: 16,
        fontFamily: Constants.font.PoppinsMedium,
        color: Constants.color.colorText
    },
    icButton: {
        marginLeft: 20
    },
    ic_Right: {
        marginRight: 20
    },
    textButtonLight: {
        marginVertical: 18,
        marginLeft: 12,
        fontSize: 15,
        fontFamily: Constants.font.PoppinsMedium
    },
    boxIconText: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewProfile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
        // marginTop: 20
    },
    textProfile: {
        fontSize: 30,
        color: Constants.color.white,
        fontFamily: Constants.font.PoppinsMedium
    }
})

export default Profile
