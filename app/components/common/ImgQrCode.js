import React, { useState } from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
    Platform,
    ToastAndroid,
    Linking,
    Alert
} from 'react-native'
import QRCode from 'react-native-qrcode-svg'
import RNFS from 'react-native-fs'
import CameraRoll from '@react-native-community/cameraroll'
import Clipboard from '@react-native-clipboard/clipboard'
import Modal from 'react-native-modal'
import Uti from '../../controller/APIs/Util'
import Constants from '../../controller/Constants'

//1. npm i react-native-svg react-native-qrcode-svg
//2. thêm android:name="android.permission.CAMERA", android:name="android.permission.READ_EXTERNAL_STORAGE", android:name="android.permission.WRITE_EXTERNAL_STORAGE" vào AndroidManifest.xml
//3. thêm android:requestLegacyExternalStorage="true" vào application
//4. thêm include ':@react-native-community_cameraroll'project(':@react-native-community_cameraroll').projectDir = new File(rootProject.projectDir, 	'../node_modules/@react-native-community/cameraroll/android') vào android/settings.gradle
//5 . npm i react-native-modal @react-native-community/cameraroll '@react-native-clipboard/clipboard
// 6. npm install --save fbjs

const ImgQrCode = ({ isModalVisible, setModalVisible, dataQR }) => {
    const [productQRref, setProductQRref] = useState()

    const downloadQRCode = async () => {
        if (Platform.OS === 'android' && !(await Uti.hasAndroidPermission)) {
            Alert.alert('Thông báo', 'Vui lòng cập nhật quyền truy cập')
            Linking.openSettings()
            return
        }

        if (productQRref) {
            productQRref.toDataURL((data) => {
                let filePath = RNFS.CachesDirectoryPath + `/${dataQR.data}.png`
                RNFS.writeFile(filePath, data, 'base64')
                    .then((success) => {
                        return CameraRoll.save(filePath, 'photo')
                    })
                    .then(() => {
                        ToastAndroid.show('Lưu QR Code vào thư viện thành công', ToastAndroid.LONG)
                    })
            })
        }
    }

    const copyPhone = () => {
        Clipboard.setString(dataQR.data)
        alert('coppy thành công')
    }

    return (
        <Modal isVisible={isModalVisible} onBackdropPress={() => setModalVisible(false)}>
            <View style={styles.modalContainer}>
                <View style={styles.boxText}>
                    <Text style={styles.textTittle}>
                        {dataQR.type == 0 ? 'Nexus point' : 'NEXToken'}
                    </Text>
                    <Text style={styles.textTittle}>QR Code</Text>
                </View>
                <QRCode
                    value={JSON.stringify(dataQR)}
                    size={160}
                    getRef={(c) => setProductQRref(c)}
                    quietZone={10} // set nền trắng chữ đen khi lưu ảnh vào thư viện
                    style={styles.imgQrCode}
                />
                <TouchableOpacity onPress={downloadQRCode}>
                    <Image source={Constants.icons.Download} style={{ marginVertical: 20 }} />
                </TouchableOpacity>
                <Text style={styles.textPhone}>{dataQR.data}</Text>
                <TouchableOpacity onPress={copyPhone} style={styles.buttonCopy}>
                    <Text style={styles.textCopy}>Copy</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    modalBackGround: {
        backgroundColor: 'rgba(0,0,0,0.5)'
    },
    modalContainer: {
        backgroundColor: 'white',
        borderRadius: 15,
        alignItems: 'center'
    },
    imgQrCode: {
        color: 'white',
        backgroundColor: Constants.color.black
    },
    boxText: {
        marginTop: 20,
        alignItems: 'center',
        marginBottom: 5
    },
    textTittle: {
        fontSize: 21,
        fontFamily: Constants.font.PoppinsSemiBold,
        color: Constants.color.black
    },
    textPhone: {
        fontSize: 14,
        fontFamily: Constants.font.PoppinsSemiBold,
        color: Constants.color.black
    },
    buttonCopy: {
        backgroundColor: Constants.color.button,
        borderRadius: 20,
        marginTop: 33,
        marginBottom: 26
    },
    textCopy: {
        fontSize: 14,
        fontFamily: Constants.font.PoppinsSemiBold,
        color: Constants.color.white,
        marginVertical: 9,
        marginHorizontal: 28
    }
})

export default ImgQrCode
