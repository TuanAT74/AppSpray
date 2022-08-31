import React, { useEffect, useLayoutEffect, useRef, useState } from 'react'
import {
    Alert,
    BackHandler,
    Image,
    Linking,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'
import { RNCamera } from 'react-native-camera'
// import Constant from '../../controller/Constant'
import Icon from 'react-native-vector-icons/Ionicons'

import Constants from './../../controller/Constants'
import { useNavigation, useRoute } from '@react-navigation/core'
import QRCodeScanner from 'react-native-qrcode-scanner'

const bgColor = 'rgba(0, 0, 0, 0.2)'

const Scan = () => {
    const navigation = useNavigation()
    const scanner = useRef()
    const [scan, setScan] = useState(false)
    const [result, setResult] = useState()

    useEffect(() => {
        setResult()
    }, [])

    const onSuccess = (e) => {
        setResult(e)
        setScan(false)

        if (e.data.substring(0, 4) === 'http') {
            alert(e.data)
        }
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.viewBack}>
                <Icon
                    name='chevron-back-outline'
                    color={Constants.color.white}
                    size={35}
                    styles={styles.icon}
                />
                <Text style={styles.textScan}>SCAN</Text>
            </TouchableOpacity>
            <QRCodeScanner
                onRead={onSuccess}
                reactivate={false}
                ref={scanner}
                containerStyle={{ width: 250, height: 250, alignSelf: 'center' }}
                cameraStyle={{ width: 250, height: 250 }}
            />
        </View>
    )
}

export default Scan
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#181818'
    },
    textScan: {
        color: Constants.color.white,
        fontSize: 30,
        fontFamily: Constants.font.PoppinsMedium
    },
    viewBack: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 20,
        marginLeft: 10
    },
    viewQRCode: {
        flex: 1,
        alignSelf: 'center'
    }
})
