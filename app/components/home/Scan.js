import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
    Alert,
    BackHandler,
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
    ActionSheet
} from 'react-native'
import { RNCamera } from 'react-native-camera'
import Icon from 'react-native-vector-icons/Ionicons'
import ImagePicker from 'react-native-image-crop-picker'
import { useNavigation } from '@react-navigation/core'
import Constants from './../../controller/Constants'
import RNQRGenerator from 'rn-qr-generator'

const HandleButtonImage = ({ title, icon, onPress }) => {
    return (
        <View>
            <TouchableOpacity onPress={onPress}>
                <Image source={icon} style={styles.icon} />
            </TouchableOpacity>
            <Text style={styles.textGallery}>{title}</Text>
        </View>
    )
}

const Scan = () => {
    const navigation = useNavigation()
    const [isBarcodeRead, setIsBarcodeRead] = useState(false)
    const [image, setImage] = useState()

    const Generator = (uri) => {
        console.log('uri', uri)
        RNQRGenerator.detect({
            uri
        }).then((response) => {
            const { values } = response
            const dataValues = JSON.parse(values)
            console.log('sss', JSON.parse(values))
            if (
                dataValues.type == Constants.QRCodeType.phone &&
                dataValues.app == Constants.QRCodeType.app
            ) {
                Alert.alert('Phone number', dataValues.data)
            } else alert('Cannot detect QR code in image')
        })
    }

    const isJsonString = (str) => {
        try {
            JSON.parse(str)
        } catch (error) {
            return false
        }
        return true
    }

    const onBarcodeRead = (event) => {
        console.log(typeof event.data)
        if (!isBarcodeRead) {
            if (isJsonString(event.data)) {
                handleCheckType(JSON.parse(event.data))
            }
            setIsBarcodeRead(true)
        }
    }

    const handleCheckType = (data) => {
        if (data.type == Constants.QRCodeType.phone && data.app == Constants.QRCodeType.app) {
            console.log(data.app, data.type)
            Alert.alert('Phone number', data.data)
        } else if (
            data.type == Constants.QRCodeType.wallet &&
            data.app == Constants.QRCodeType.app
        ) {
            Alert.alert('Wallet', data.data)
        } else {
            alert('Cannot detect QR code in image')
        }
    }

    const onShowGallery = () => {
        ImagePicker.openPicker({}).then((image) => {
            Generator(image.path)
            console.log(image)
        })
    }

    return (
        <View style={{ flex: 1 }}>
            <RNCamera
                style={styles.camera}
                autoFocus='on'
                captureAudio={false}
                barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                androidCameraPermissionOptions={{
                    title: 'Grant camera access',
                    message: 'Please grant camera access to use this function!',
                    buttonPositive: 'Agree',
                    buttonNegative: 'Cancel'
                }}
                onBarCodeRead={onBarcodeRead}
            >
                <View style={styles.cameraView}>
                    <View style={styles.backView}>
                        <TouchableOpacity
                            style={{
                                ...styles.closeButton
                            }}
                            onPress={() => {
                                navigation.goBack()
                            }}
                        >
                            <Icon name='chevron-back-outline' size={30} color='#fff' />
                            <Text style={styles.scanText}>SCAN</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={styles.view} />
                        <View
                            style={{
                                flexDirection: 'row'
                            }}
                        >
                            <View style={styles.view} />
                            <View style={styles.contentView}>
                                <Image style={styles.scanFrameImg} />
                                <Text style={styles.titleText}>Nexus Point</Text>
                            </View>
                            <View style={styles.view} />
                        </View>
                        <View style={styles.view} />
                    </View>
                    <View style={styles.viewBot} />
                    <View style={styles.viewIcon}>
                        <HandleButtonImage
                            title='Gallery'
                            icon={Constants.icons.ic_Gallery}
                            onPress={onShowGallery}
                        />
                        <HandleButtonImage title='Light' icon={Constants.icons.ic_Light} />
                        <HandleButtonImage title='Help' icon={Constants.icons.ic_Help} />
                    </View>
                </View>
            </RNCamera>
        </View>
    )
}

export default Scan

const styles = StyleSheet.create({
    scanFrameImg: {
        width: 260,
        height: 260
    },
    closeButton: {
        paddingLeft: 12,
        paddingTop: 28,
        flexDirection: 'row',
        alignItems: 'center'
    },
    camera: {
        flex: 1
    },
    titleText: {
        fontSize: 16,
        color: Constants.color.white,
        paddingTop: 10,
        backgroundColor: Constants.color.backgScan,
        textAlign: 'center',
        fontFamily: Constants.font.PoppinsMedium
    },
    cameraView: {
        flex: 1,
        backgroundColor: Constants.color.backgScan
    },
    backView: {
        backgroundColor: Constants.color.backgScan
    },
    scanText: {
        fontSize: 30,
        color: Constants.color.white,
        marginLeft: 12,
        fontFamily: Constants.font.PoppinsMedium
    },
    viewIcon: {
        backgroundColor: Constants.color.backgScan,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 40,
        paddingBottom: 20
    },
    icon: {
        width: 48,
        height: 48
    },
    textGallery: {
        color: Constants.color.white,
        textAlign: 'center',
        paddingTop: 10,
        fontFamily: Constants.font.PoppinsMedium
    },
    view: {
        flex: 1,
        backgroundColor: Constants.color.backgScan
    },
    viewBot: {
        backgroundColor: Constants.color.backgScan,
        paddingBottom: 24
    }
})
