import React, { useState, useEffect } from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native'
import { Switch } from 'react-native-paper'
import Constants from '../../controller/Constants'
import { useNavigation } from '@react-navigation/native'
import Background from './../common/Background'
import AppManager from '../../controller/APIs/AppManager'
import CommonAPIs from './../../controller/APIs/CommonAPIs'
import Header from './../common/Header'
import ImgQrCode from '../common/ImgQrCode'

const ButtonItem = ({
    title,
    onPress,
    icon,
    iconToWard = false,
    toggle = false,
    disabled = false
}) => {
    const [isSwitchOn, setIsSwitchOn] = useState(true)

    const onToggleSwitch = () => setIsSwitchOn(!isSwitchOn)

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress}
            activeOpacity={0.7}
            disabled={disabled}
        >
            <View style={styles.boxIconText}>
                <Image source={icon} />
                <Text style={styles.textButton}>{title}</Text>
            </View>
            {iconToWard && <Image source={Constants.icons.right} />}
            {toggle && <Switch value={isSwitchOn} onValueChange={onToggleSwitch} color='#7879E8' />}
        </TouchableOpacity>
    )
}

const Profile = () => {
    const navigation = useNavigation()
    const [isModalVisible, setModalVisible] = useState(false)
    const [profile, setProfile] = useState()
    console.log(profile)

    const onQrcodePhone = () => {
        setModalVisible(true)
    }

    const getAvatar = () => {
        if (
            AppManager.shared.currentUser?.avatar != null &&
            AppManager.shared.currentUser?.avatar !== ''
        ) {
            return { uri: AppManager.shared.currentUser?.avatar }
        }
        return Constants.image.avatar
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
        <ScrollView style={styles.container}>
            <ImgQrCode
                title='Nexus Point'
                value={AppManager.shared.currentUser?.phone ?? ''}
                dataQR={`{"app": "NexusPoint","type": "0", "phone": "${AppManager.shared.currentUser?.phone}"}`}
                isModalVisible={isModalVisible}
                setModalVisible={(value) => setModalVisible(value)}
            />
            <Background hideLogo={true} color='#F7F7F7' />
            <Header title='PROFILE' />
            <View style={styles.boxProfile}>
                <Image source={getAvatar()} style={styles.imgAvatar} />
                <View style={styles.boxInforUser}>
                    <Image source={Constants.image.qrcode} style={styles.imgQrcode} />
                    <View style={styles.inforUser}>
                        <Text style={styles.textUser}>Jonathan Doe</Text>
                        <Text style={styles.textPhone}>No.{profile?.phone}</Text>
                    </View>
                    <View style={{ width: 23 }}></View>
                </View>
                <View style={styles.boxQrCode}>
                    <TouchableOpacity
                        onPress={onQrcodePhone}
                        activeOpacity={0.8}
                        style={styles.buttonQr}
                    >
                        <Image source={Constants.image.qrcode} style={styles.imgQrcodeInButton} />
                        <View style={styles.boxTextQr}>
                            <Text style={styles.textOnQr}>Nexus Point</Text>
                            <Text style={styles.textQr}>QR Code</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={0.8} style={styles.buttonQr}>
                        <Image source={Constants.image.qrcode} style={styles.imgQrcodeInButton} />
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
                    icon={Constants.icons.factor}
                    toggle={true}
                    disabled
                />
                <ButtonItem
                    title='Change Profile'
                    onPress={() => navigation.navigate(Constants.screenName.ChangeProfile)}
                    icon={Constants.icons.profile}
                    iconToWard={true}
                />
                <ButtonItem
                    title='Payment History'
                    icon={Constants.icons.payment}
                    iconToWard={true}
                />
                <ButtonItem title='Setting' icon={Constants.icons.setting} iconToWard={true} />
                <ButtonItem
                    title='Terms of Services'
                    icon={Constants.icons.service}
                    iconToWard={true}
                />
                <ButtonItem title='Help & Support' icon={Constants.icons.help} />
                <ButtonItem title='Logout' icon={Constants.icons.logout} />
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    boxProfile: {
        backgroundColor: Constants.color.white,
        marginHorizontal: 20,
        borderRadius: 10,
        elevation: 1
    },
    boxInforUser: {
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: Constants.color.border,
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        marginHorizontal: 20,
        paddingBottom: 20
    },
    imgAvatar: {
        marginTop: 35,
        marginBottom: 13,
        width: 70,
        height: 70,
        borderRadius: 20,
        alignSelf: 'center',
        resizeMode: 'contain'
    },
    imgQrcode: {
        width: 23,
        height: 23
    },
    inforUser: {
        alignItems: 'center'
    },
    textUser: {
        fontSize: 20,
        fontFamily: Constants.font.PoppinsSemiBold,
        textAlign: 'center',
        color: Constants.color.black,
        includeFontPadding: false
    },
    textPhone: {
        fontSize: 14,
        fontFamily: Constants.font.PoppinsMedium,
        includeFontPadding: false
    },
    boxQrCode: {
        flexDirection: 'row',
        marginVertical: 20,
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    buttonQr: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        borderColor: Constants.color.border,
        paddingHorizontal: 16
    },
    boxTextQr: {
        marginLeft: 15
    },
    textOnQr: {
        fontSize: 10,
        fontFamily: Constants.font.PoppinsSemiBold,
        color: Constants.color.black,
        includeFontPadding: false
    },
    textQr: {
        fontSize: 16,
        fontFamily: Constants.font.PoppinsSemiBold,
        color: Constants.color.black,
        includeFontPadding: false
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
        color: Constants.color.colorText,
        includeFontPadding: false
    },

    textButtonLight: {
        marginVertical: 18,
        marginLeft: 12,
        fontSize: 15,
        fontFamily: Constants.font.PoppinsMedium,
        includeFontPadding: false
    },
    boxIconText: {
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default Profile
