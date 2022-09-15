import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Background from './../common/Background'
import Header from '../common/Header'
import HeaderHome from '../common/HeaderHome'
import Constants from './../../controller/Constants'

const PaymentDetails = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <Background hideLogo='false' />
                <Header title='Payment Details' showBackButton />
                <HeaderHome />
                <Text style={styles.textPayment}>Payment Details</Text>
                <View style={styles.viewInformation}>
                    <View style={{ ...styles.viewName, marginTop: 20 }}>
                        <Text style={styles.textName}>Name</Text>
                        <Text style={styles.textJame}>James Ronald</Text>
                    </View>
                    <View style={styles.viewName}>
                        <Text style={styles.textName}>Amount</Text>
                        <View>
                            <Text style={styles.textJame}>-500</Text>
                            <Text style={styles.textNexus}>Nexus Point</Text>
                        </View>
                    </View>
                    <View style={styles.viewTotal}>
                        <Text style={styles.textName}>TOTAL</Text>
                        <View>
                            <Text style={styles.textJame}>-500</Text>
                            <Text style={styles.textNexus}>Nexus Point</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
            <View style={styles.viewButtonConfirm}>
                <TouchableOpacity style={styles.buttonNext}>
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
        marginBottom: 20
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
        borderBottomWidth: 1,
        borderColor: Constants.color.gray,
        borderStyle: 'dashed',
        paddingBottom: 10,
        marginBottom: 15
    },
    textName: {
        fontSize: 16,
        color: Constants.color.black,
        fontFamily: Constants.font.PoppinsSemiBold
    },
    textJame: {
        fontSize: 16,
        fontFamily: Constants.font.PoppinsMedium
    },
    textNexus: {
        fontFamily: Constants.font.PoppinsMedium
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
        fontFamily: Constants.font.PoppinsMedium
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
