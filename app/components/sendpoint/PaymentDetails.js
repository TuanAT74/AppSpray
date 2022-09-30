import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Background from './../common/Background'
import Header from '../common/Header'
import HeaderHome from '../common/HeaderHome'
import Constants from './../../controller/Constants'
import { useNavigation, useRoute } from '@react-navigation/native'

const PaymentDetailsItem = ({ title, value, nexusPoint = false, style }) => {
    return (
        <View style={[styles.viewName, style]}>
            <Text style={styles.textName}>{title}</Text>
            <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.textJame}>{value}</Text>
                {nexusPoint && <Text style={styles.textNexusPoint}>Nexus Point</Text>}
            </View>
        </View>
    )
}

const PaymentDetails = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const phone = route.params?.phone ?? ''
    const point = route.params?.point ?? 0
    const total = route.params?.total ?? 0
    const transactionFee = route.params?.transactionFee ?? 0
    const name = route.params?.name ?? ''

    const onSendPointSuccessed = (data) => {
        navigation.push(Constants.screenName.SendPoint, {
            point,
            transactionFee: data?.transaction_fee,
            name,
            balance: data?.balance,
            phone
        })
    }

    return (
        <View style={styles.container}>
            <ScrollView>
                <Background hideLogo='false' />
                <Header title='Payment Details' showBackButton />
                <HeaderHome />
                <Text style={styles.textPayment}>Payment Details</Text>
                <View style={styles.viewInformation}>
                    <PaymentDetailsItem
                        title='Name'
                        value={name}
                        style={{ borderBottomWidth: 1 }}
                    />
                    <PaymentDetailsItem
                        title='Amount'
                        value={-point}
                        nexusPoint={true}
                        style={{ borderBottomWidth: 1 }}
                    />
                    <PaymentDetailsItem title='TOTAL' value={-point} nexusPoint={true} />
                </View>
            </ScrollView>
            <View style={styles.viewButtonConfirm}>
                <TouchableOpacity onPress={onSendPointSuccessed} style={styles.buttonNext}>
                    <Text style={styles.textNext}>Confirm</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default PaymentDetails

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textPayment: {
        marginTop: 80,
        paddingHorizontal: 20,
        fontSize: 20,
        fontFamily: Constants.font.PoppinsSemiBold,
        color: Constants.color.black,
        marginBottom: 20,
        includeFontPadding: false
    },
    viewInformation: {
        backgroundColor: Constants.color.white,
        marginHorizontal: 20,
        borderRadius: 10
    },
    viewName: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        borderColor: Constants.color.gray,
        borderStyle: 'dashed',
        paddingBottom: 10,
        marginBottom: 5,
        marginTop: 20
    },
    textName: {
        fontSize: 16,
        color: Constants.color.black,
        fontFamily: Constants.font.PoppinsSemiBold,
        includeFontPadding: false
    },
    textJame: {
        fontSize: 16,
        fontFamily: Constants.font.PoppinsMedium,
        alignItems: 'flex-end',
        includeFontPadding: false
    },
    textNexusPoint: {
        fontFamily: Constants.font.PoppinsSemiBold,
        fontSize: 8,
        includeFontPadding: false
    },
    buttonNext: {
        backgroundColor: Constants.color.button,
        marginHorizontal: 20,
        borderRadius: 20
    },
    textNext: {
        textAlign: 'center',
        color: Constants.color.white,
        paddingVertical: 10,
        fontFamily: Constants.font.PoppinsMedium,
        includeFontPadding: false
    },
    viewButtonConfirm: {
        backgroundColor: Constants.color.white,
        paddingTop: 20,
        paddingBottom: 20
    },
    viewTotal: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        paddingBottom: 10,
        marginBottom: 20
    }
})
