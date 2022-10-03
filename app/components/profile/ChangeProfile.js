import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView,
    LogBox,
    Alert
} from 'react-native'
import React, { useRef, useState, useEffect } from 'react'
import Background from './../common/Background'
import Constants from './../../controller/Constants'
import { useNavigation } from '@react-navigation/native'
import ImagePicker from 'react-native-image-crop-picker'
import ActionSheet from 'react-native-actionsheet'
import CommonAPIs from '../../controller/APIs/CommonAPIs'
import AppManager from '../../controller/APIs/AppManager'
import RNProgressHud from 'progress-hud'
import Header from './../common/Header'

LogBox.ignoreLogs(['Animated: `useNativeDriver`', 'componentWillReceiveProps'])

const ChangeProfile = () => {
    const navigation = useNavigation()
    const [profile, setProfile] = useState()
    const refActionSheet = useRef(null)

    const onShowImageActionSheet = () => {
        refActionSheet.current?.show(true)
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

    const onSuccess = (user) => {
        setProfile(user)
    }

    const onFailed = (error) => {
        Alert.alert(
            'Notification',
            error?.response?.data?.message ??
                error?.message ??
                'An error has occurred. Please try again!'
        )
    }

    const updateAvatar = (image) => {
        RNProgressHud.show()
        CommonAPIs.updateAvatar(image)

            .then((res) => {
                onSuccess()
            })
            .catch((err) => {
                onFailed()
            })
            .finally(() => RNProgressHud.dismiss())
    }

    const openCamera = () => {
        ImagePicker.openCamera({
            cropping: true,
            freeStyleCropEnabled: false,
            compressImageMaxWidth: 300
        }).then((image) => {
            updateAvatar(image)
        })
    }

    const openLibrary = () => {
        ImagePicker.openPicker({
            cropping: true,
            freeStyleCropEnabled: false,
            multiple: false,
            compressImageMaxWidth: 300
        }).then((image) => {
            updateAvatar(image)
        })
    }

    const handlePickerImage = (index) => {
        if (index == 0) {
            openCamera()
        } else if (index == 1) {
            openLibrary()
        }
    }

    useEffect(() => {
        navigation.addListener('focus', () => {
            setProfile(AppManager.shared.currentUser)
        })
    }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
                <Background />
                <Header title='Change Profile' showBackButton />
                <View style={styles.viewChange}>
                    <TouchableOpacity onPress={onShowImageActionSheet}>
                        <Image source={getAvatar()} style={styles.imgAvatar} />
                    </TouchableOpacity>
                    <View style={{ ...styles.viewInformation, marginTop: 20 }}>
                        <Text style={styles.textName}>Name</Text>
                        <TextInput style={styles.TextInput} placeholder='Jonathan Doe' />
                    </View>
                    <View style={styles.viewInformation}>
                        <Text style={styles.textName}>Phone</Text>
                        <TextInput
                            style={styles.TextInput}
                            placeholder='0912 - 339 -3493'
                            keyboardType='numeric'
                        />
                    </View>
                    <View style={styles.viewInformation}>
                        <Text style={styles.textName}>NXD Deposite Address</Text>
                        <TextInput
                            style={styles.TextInput}
                            placeholder='9qNY2zwvjCjSoQDAFGiToG5KwU…..'
                        />
                    </View>
                    <TouchableOpacity style={styles.buttonSave}>
                        <Text style={styles.textSave}>Save</Text>
                    </TouchableOpacity>
                </View>
                <ActionSheet
                    ref={refActionSheet}
                    title={'Choose photo'}
                    options={['Camera', 'Photo library', 'Cancel']}
                    cancelButtonIndex={2}
                    onPress={handlePickerImage}
                />
            </View>
        </ScrollView>
    )
}

export default ChangeProfile

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 20
    },
    textChangeProfile: {
        flex: 1,
        fontSize: 30,
        color: Constants.color.white,
        fontFamily: Constants.font.PoppinsSemiBold,
        includeFontPadding: false
    },
    icon: {
        color: Constants.color.white,
        includeFontPadding: false
    },
    viewChange: {
        backgroundColor: Constants.color.white,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 25
    },
    imgAvatar: {
        width: 70,
        height: 70,
        alignSelf: 'center',
        marginTop: 20,
        borderRadius: 20,
        resizeMode: 'contain'
    },
    TextInput: {
        borderWidth: 1,
        borderColor: Constants.color.border,
        borderRadius: 10,
        marginHorizontal: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontFamily: Constants.font.PoppinsMedium,
        includeFontPadding: false
    },
    textName: {
        fontSize: 20,
        marginHorizontal: 20,
        marginBottom: 5,
        fontFamily: Constants.font.PoppinsMedium,
        color: Constants.color.black,
        includeFontPadding: false
    },
    buttonSave: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginHorizontal: 20,
        borderRadius: 25,
        backgroundColor: Constants.color.button,
        marginBottom: 25
    },
    textSave: {
        fontSize: 14,
        fontFamily: Constants.font.PoppinsMedium,
        color: Constants.color.white,
        paddingVertical: 13,
        fontWeight: Constants.font.PoppinsSemiBold,
        includeFontPadding: false
    },
    viewInformation: {
        marginBottom: 20
    }
})
