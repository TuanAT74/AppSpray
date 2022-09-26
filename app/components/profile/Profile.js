import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'

import { Switch } from 'react-native-paper'

import Constants from '../../controller/Constants'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/native'
import Background from './../common/Background'
import AppManager from '../../controller/APIs/AppManager'
import CommonAPIs from './../../controller/APIs/CommonAPIs'
import Header from './../common/Header'

import ImgQrCode from '../common/ImgQrCode'

let dataQRCode = {
    phone: {
        app: 'NexusPoint',
        type: 0,
        data: '0348000950'
    },
    wallet: {
        app: 'NexusPoint',
        type: 1,
        data: 'TPza8tkcTfGa4XzyZoMbGEjpuyaBUJBsN9'
    }
}

const ButtonItem = ({ title, onPress, icon, iconToWard = false, toggle = false }) => {
    const [isSwitchOn, setIsSwitchOn] = useState(true)

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn)

    return (
        <TouchableOpacity style={styles.button} onPress={onPress} activeOpacity={1}>
            <View style={styles.boxIconText}>
                <Image source={icon} style={styles.icButton} />
                <Text style={styles.textButton}>{title}</Text>
            </View>
            {iconToWard && <Image source={Constants.icons.ic_Right} style={styles.ic_Right} />}
            {toggle && <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color='#7879E8' />}
        </TouchableOpacity>
    )
}

const Profile = () => {
    const navigation = useNavigation()

    const [isModalVisible, setModalVisible] = useState(false)
    const [dataQR, setDataQR] = useState([])

    const [profile, setProfile] = useState()

    const onQrcodePhone = () => {
        setDataQR(dataQRCode.phone)
        setModalVisible(true)
    }

    const onQrcodeWallet = () => {
        setDataQR(dataQRCode.wallet)
        setModalVisible(true)
    }

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

    useEffect(() => {
        navigation.addListener('focus', () => {
            setProfile(AppManager.shared.currentUser)
        })
    }, [])

    return (
        <>
            <ScrollView style={styles.container}>
                <Background hideLogo={true} color='#F7F7F7' />
                <Header title='PROFILE' />
                <ImgQrCode
                    isModalVisible={isModalVisible}
                    setModalVisible={(value) => setModalVisible(value)}
                    dataQR={dataQR}
                />
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
                        <TouchableOpacity onPress={onQrcodePhone} style={styles.buttonQr}>
                            <Image
                                source={Constants.image.img_Qrcode}
                                style={styles.imgQrcodeInButton}
                            />
                            <View style={styles.boxTextQr}>
                                <Text style={styles.textOnQr}>NexusPoint</Text>
                                <Text style={styles.textQr}>QR Code</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={onQrcodeWallet} style={styles.buttonQr}>
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
                <View style={{ marginBottom: 24 }}>
                    <ButtonItem
                        title='2 Factor Authentication'
                        icon={Constants.icons.ic_Factor}
                        toggle={true}
                    />
                    <ButtonItem
                        title='Change Profile'
                        onPress={() => navigation.navigate(Constants.screenName.ChangeProfile)}
                        icon={Constants.icons.ic_Profile}
                        iconToWard={true}
                    />
                    <ButtonItem
                        title='Payment History'
                        icon={Constants.icons.ic_Payment}
                        iconToWard={true}
                    />
                    <ButtonItem
                        title='Setting'
                        icon={Constants.icons.ic_Setting}
                        iconToWard={true}
                    />
                    <ButtonItem
                        title='Terms of Services'
                        icon={Constants.icons.ic_Service}
                        iconToWard={true}
                    />
                    <ButtonItem title='Help & Support' icon={Constants.icons.ic_Help} />
                    <ButtonItem title='Logout' icon={Constants.icons.ic_Logout} />
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
        shadowRadius: 20,
        justifyContent: 'space-between',
        paddingHorizontal: 20
    },
    textButton: {
        marginVertical: 18,
        marginLeft: 12,
        fontSize: 16,
        fontFamily: Constants.font.PoppinsMedium,
        color: Constants.color.colorText
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
    }
})

export default Profile
