import React from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, Alert } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import RNProgressHud from 'progress-hud'
import Background from '../common/Background'
import Constants from '../../controller/Constants'
import Header from '../common/Header'
import TransactionAPIs from './../../controller/APIs/TransactionAPIs'

const SendPoint = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const phone = route.params?.phone ?? ''
    const point = route.params?.point ?? 0

    const onSuccesse = (data) => {
        navigation.push(Constants.screenName.SuccessTransaction, {
            name: data?.name,
            balance: data?.balance,
            amount: data?.amount,
            transaction_fee: data?.transaction_fee
        })
    }

    const onFaile = (error) => {
        Alert.alert(
            'Notification',
            error?.response?.data?.message ??
                error?.message ??
                'An error has occurred. Please try again!'
        )
    }

    const ConfirmSendPoint = () => {
        RNProgressHud.show()
        TransactionAPIs.sendPoint(phone, point)
            .then(onSuccesse)
            .catch(onFaile)
            .finally(() => RNProgressHud.dismiss())
    }

    return (
        <View style={styles.container}>
            <Background color={Constants.color.white} />
            <Header
                title='Send Nexus Point'
                fontSize={25}
                showBackButton={true}
                showNotification={false}
            />
            <ScrollView>
                <View style={styles.boxContent}>
                    <Text style={styles.textTitle}>Payment complete</Text>
                    <Image source={Constants.image.img_Complete} style={styles.img} />
                    <TouchableOpacity onPress={ConfirmSendPoint} style={styles.button}>
                        <Text style={styles.textButton}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}

export default SendPoint

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    boxContent: {
        marginHorizontal: 25,
        marginTop: 10,
        backgroundColor: Constants.color.white,
        borderRadius: 20,
        paddingBottom: 20,
        marginBottom: 10,
        shadowColor: '#666',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 2
    },
    textTitle: {
        fontSize: 21,
        fontFamily: Constants.font.PoppinsSemiBold,
        color: Constants.color.black,
        marginTop: 37,
        marginBottom: 64,
        textAlign: 'center',
        includeFontPadding: false
    },
    button: {
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Constants.color.button,
        marginTop: 85,
        borderRadius: 30
    },
    img: {
        alignSelf: 'center'
    },
    textButton: {
        marginVertical: 14,
        fontFamily: Constants.font.PoppinsSemiBold,
        fontSize: 14,
        color: Constants.color.white,
        includeFontPadding: false
    }
})
