import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Constants from './../../controller/Constants'
import { useNavigation } from '@react-navigation/native'
import AppManager from './../../controller/APIs/AppManager'

const HeaderHome = ({ buttonPayment = false }) => {
    const navigation = useNavigation()
    return (
        <>
            <View style={styles.viewNexusPoint}>
                <Image source={Constants.icons.point} style={styles.imgPoint} />
                <View style={styles.viewTextNexusPoint}>
                    <Text style={styles.textNexusPointNumber}>23.254</Text>
                    <Text style={styles.textNexusPoint}>Nexus Point</Text>
                </View>
            </View>
            <View style={styles.viewEquiv}>
                <Text style={styles.textEquiv}>Equiv :</Text>
                <Text style={styles.textAED}>AED</Text>
            </View>
            {buttonPayment && (
                <View style={styles.viewButtonHeader}>
                    <TouchableOpacity
                        style={styles.viewButtonP}
                        onPress={() => {
                            navigation.push(Constants.screenName.Scan)
                        }}
                    >
                        <Image source={Constants.icons.qrcode} style={styles.imgButton} />
                        <Text style={styles.textButton}>Scan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={styles.viewButtonP}
                        onPress={() => {
                            navigation.push(Constants.screenName.RemittanceAmount)
                        }}
                    >
                        <Image source={Constants.icons.send} style={styles.imgButton} />
                        <Text style={styles.textButton}>Send</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.viewButton}>
                        <Image source={Constants.icons.receive} style={styles.imgButton} />
                        <Text style={styles.textButton}>Receive</Text>
                    </TouchableOpacity>
                </View>
            )}
        </>
    )
}

export default HeaderHome

const styles = StyleSheet.create({
    viewHome: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 20
        // marginTop: 20
    },
    textHome: {
        fontSize: 30,
        color: Constants.color.white,
        fontFamily: Constants.font.PoppinsMedium
    },
    viewNexusPoint: {
        marginHorizontal: 20,
        backgroundColor: Constants.color.white,
        borderRadius: 20,
        paddingVertical: 5,
        paddingHorizontal: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    textNexusPointNumber: {
        fontSize: 20,
        fontFamily: Constants.font.PoppinsSemiBold,
        includeFontPadding: false
    },
    textNexusPoint: {
        fontSize: 8,
        fontFamily: Constants.font.PoppinsSemiBold,
        includeFontPadding: false,
        paddingLeft: 15,
        marginTop: -5
    },
    viewEquiv: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: Constants.color.white,
        marginHorizontal: 20,
        marginLeft: 100,
        paddingVertical: 8,
        borderRadius: 20,
        marginTop: 10,
        paddingHorizontal: 15
    },
    textEquiv: {
        fontSize: 14,
        color: Constants.color.buttonHome,
        fontFamily: Constants.font.PoppinsMedium
    },
    viewButton: {
        backgroundColor: Constants.color.white,
        width: 76,
        height: 76,
        borderRadius: 20,
        shadowColor: '#666',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewButtonHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20
    },
    textButton: {
        fontSize: 14,
        fontFamily: Constants.font.PoppinsMedium,
        marginTop: 5
    },
    imgButton: {
        marginTop: 10,
        width: 30,
        height: 30
    },
    textAED: {
        fontSize: 14,
        fontFamily: Constants.font.PoppinsMedium
    },
    imgPoint: {
        width: 30,
        height: 30
    },
    viewButtonHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop: 20
    },
    viewButtonP: {
        backgroundColor: Constants.color.white,
        width: 76,
        height: 76,
        borderRadius: 20,
        shadowColor: '#666',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textButton: {
        fontSize: 14,
        fontFamily: Constants.font.PoppinsMedium,
        marginTop: 5
    },
    imgButton: {
        marginTop: 10,
        width: 30,
        height: 30
    }
})
