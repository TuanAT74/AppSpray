import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import Constants from './../../controller/Constants'
import { useNavigation } from '@react-navigation/native'

const HeaderHome = () => {
    const navigation = useNavigation()
    return (
        <View>
            <View style={styles.viewNexusPoint}>
                <Image source={Constants.icons.ic_point} style={styles.imgPoint} />
                <View style={styles.viewTextNexusPoint}>
                    <Text style={styles.textNexusPointNumber}>23.254</Text>
                    <Text style={styles.textNexusPoint}>Nexus Point</Text>
                </View>
            </View>
            <View style={styles.viewEquiv}>
                <Text style={styles.textEquiv}>Equiv :</Text>
                <Text style={styles.textAED}>AED</Text>
            </View>
        </View>
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
        paddingLeft: 15
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
        // marginBottom: 50
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
    }
})
