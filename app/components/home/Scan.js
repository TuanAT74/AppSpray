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
import { QRscanner } from 'react-native-qr-decode-image-camera'

const Scan = () => {
    const navigation = useNavigation()
    const [isBarcodeRead, setIsBarcodeRead] = useState(false)
    const [barcodeType, setBarcodeType] = useState('')
    const [barcodeValue, setBarcodeValue] = useState('')
    const [shouldReadBarCode, setShouldReadBarCode] = useState('')

    useEffect(() => {
        if (isBarcodeRead) {
            Alert.alert(barcodeType, barcodeValue, [
                {
                    text: 'OK',
                    onPress: () => {
                        setIsBarcodeRead(false)
                        setBarcodeType('')
                        setBarcodeValue('')
                    }
                }
            ])
        }
    }, [isBarcodeRead, barcodeType, barcodeValue])

    const onBarcodeRead = (event) => {
        if (!isBarcodeRead) {
            console.log(JSON.parse(event.data))
            handleCheckType(JSON.parse(event.data))
            setIsBarcodeRead(true)
            navigation.navigate(Constants.screenName.TabBarNavigation)
        }
    }
    const handleCheckType = (data) => {
        // switch (data.type) {
        //     case 0:
        //         Alert.alert('Thông báo', data.data)
        //         break
        //     default:
        //         break
        // }
        try {
            if (data.type == 0) {
                Alert.alert('Phone number', data.data)
                return
            } else if (data.type == 1) {
                Alert.alert('Wallet', data.data)
            }
        } catch (error) {}
    }
    return (
        <View style={{ flex: 1 }}>
            <RNCamera
                style={styles.camera}
                autoFocus='on'
                captureAudio={false}
                barCodeTypes={[RNCamera.Constants.BarCodeType.qr]}
                androidCameraPermissionOptions={{
                    title: 'Cấp quyền truy cập camera',
                    message: 'Vui lòng cấp quyền truy cập camera để sử dụng chức năng này!',
                    buttonPositive: 'Đồng ý',
                    buttonNegative: 'Hủy'
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
                        <View>
                            <TouchableOpacity>
                                <Image source={Constants.icons.ic_Gallery} style={styles.icon} />
                            </TouchableOpacity>
                            <Text style={styles.textGallery}>Gallery</Text>
                        </View>

                        <View>
                            <TouchableOpacity>
                                <Image source={Constants.icons.ic_Light} style={styles.icon} />
                            </TouchableOpacity>
                            <Text style={styles.textGallery}>Light</Text>
                        </View>
                        <View>
                            <TouchableOpacity>
                                <Image source={Constants.icons.ic_Help} style={styles.icon} />
                            </TouchableOpacity>
                            <Text style={styles.textGallery}>Help</Text>
                        </View>
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
    contentView: {},
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
