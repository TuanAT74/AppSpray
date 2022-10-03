import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Background from './../common/Background'
import Header from '../common/Header'
import HeaderHome from '../common/HeaderHome'
import Constants from './../../controller/Constants'
import { useNavigation, useRoute } from '@react-navigation/native'

const PaymentDetailsItem = ({ title, value, showNexusPointText = false, style }) => {
    return (
        <View style={[styles.nameView, style]}>
            <Text style={styles.nameText}>{title}</Text>
            <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.valueText}>{value}</Text>
                {showNexusPointText && <Text style={styles.textNexusPoint}>Nexus Point</Text>}
            </View>
        </View>
    )
}

const PaymentDetails = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const phone = route.params?.phone ?? ''
    const point = route.params?.point ?? 0
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
                <Background hideLogo={false} />
                <Header title='Payment Details' showBackButton />
                <HeaderHome />
                <Text style={styles.paymentText}>Payment Details</Text>
                <View style={styles.informationView}>
                    <PaymentDetailsItem
                        title='Name'
                        value={name}
                        style={{ borderBottomWidth: 1 }}
                    />
                    <PaymentDetailsItem
                        title='Amount'
                        value={`-${point}`}
                        nexusPoint={true}
                        style={{ borderBottomWidth: 1 }}
                    />
                    <PaymentDetailsItem
                        title='TOTAL'
                        value={`-${point}`}
                        showNexusPointText={true}
                    />
                </View>
            </ScrollView>
            <View style={styles.buttonConfirmView}>
                <TouchableOpacity onPress={onSendPointSuccessed} style={styles.nextButton}>
                    <Text style={styles.nextText}>Confirm</Text>
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
    informationView: {
        backgroundColor: Constants.color.white,
        marginHorizontal: 20,
        borderRadius: 10
    },
    nameView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        borderColor: Constants.color.gray,
        borderStyle: 'dashed',
        paddingBottom: 10,
        marginBottom: 5,
        marginTop: 20
    },
    nameText: {
        fontSize: 16,
        color: Constants.color.black,
        fontFamily: Constants.font.PoppinsSemiBold,
        includeFontPadding: false
    },
    valueText: {
        fontSize: 16,
        fontFamily: Constants.font.PoppinsMedium,
        alignItems: 'flex-end',
        includeFontPadding: false
    },
    nexusPointText: {
        fontFamily: Constants.font.PoppinsSemiBold,
        fontSize: 8,
        includeFontPadding: false
    },
    nextButton: {
        backgroundColor: Constants.color.button,
        marginHorizontal: 20,
        borderRadius: 20
    },
    nextText: {
        textAlign: 'center',
        color: Constants.color.white,
        paddingVertical: 10,
        fontFamily: Constants.font.PoppinsMedium,
        includeFontPadding: false
    },
    buttonConfirmView: {
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
