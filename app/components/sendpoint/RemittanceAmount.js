import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Image,
    FlatList,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import React from 'react'
import Background from '../common/Background'
import Header from '../common/Header'
import HeaderHome from '../common/HeaderHome'
import Constants from './../../controller/Constants'
import { useNavigation } from '@react-navigation/core'

const RemittanceAmount = () => {
    const navigation = useNavigation()
    const list = [
        {
            id: 1,
            icon: Constants.icons.sendPink,
            name: 'Electricity',
            date: '2 Jun 2020',
            point: '-500'
        },
        {
            id: 2,
            icon: Constants.icons.sendPink,
            name: 'Electricity',
            date: '2 Jun 2020',
            point: '-500'
        },
        {
            id: 3,
            icon: Constants.icons.sendPink,
            name: 'Electricity',
            date: '2 Jun 2020',
            point: '-500'
        },
        {
            id: 4,
            icon: Constants.icons.sendPink,
            name: 'Electricity',
            date: '2 Jun 2020',
            point: '-500'
        },
        {
            id: 5,
            icon: Constants.icons.sendPink,
            name: 'Electricity',
            date: '2 Jun 2020',
            point: '-500'
        }
    ]

    return (
        <View style={styles.container}>
            <ScrollView>
                <Background hideLogo='false' color='#F7F7F7' />
                <Header title='Send Nexus Point' showBackButton />
                <HeaderHome />
                <View style={styles.viewRemittanceAmount}>
                    <Text style={styles.textRemittanceAmount}>Remittance amount</Text>
                    <View style={styles.buttonInput}>
                        <TextInput
                            placeholder='123.000'
                            style={styles.textInput}
                            keyboardType='numeric'
                        />
                        <Image source={Constants.icons.ic_point} style={styles.iconPoint} />
                    </View>
                    <View style={styles.viewPoint}>
                        <Text style={styles.textAED}>232.54</Text>
                        <Text style={{ ...styles.textAED, paddingLeft: 10 }}>AED</Text>
                    </View>
                </View>
                <Text style={styles.textTransaction}>Transaction History</Text>
                <View style={{ backgroundColor: Constants.color.white }}>
                    <FlatList
                        data={list}
                        scrollEnabled={true}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => (
                            <View style={styles.viewList}>
                                <View style={styles.viewButtonSend}>
                                    <Image source={Constants.icons.sendPink} style={styles.icon} />
                                </View>
                                <View style={styles.viewTextName}>
                                    <Text style={styles.textName}>{item.name}</Text>
                                    <Text style={styles.textDate}>{item.date}</Text>
                                </View>
                                <View style={styles.ViewTextPoint}>
                                    <Text style={styles.textPoint}>{item.point}</Text>
                                    <Text style={styles.textNexusPoint}>Nexus Point</Text>
                                </View>
                            </View>
                        )}
                    />
                </View>
            </ScrollView>
            <View style={styles.viewButton}>
                <TouchableOpacity
                    style={styles.buttonNext}
                    onPress={() => {
                        navigation.push(Constants.screenName.PaymentDetails)
                    }}
                >
                    <Text style={styles.textNext}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default RemittanceAmount

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewRemittanceAmount: {
        backgroundColor: Constants.color.white,
        marginTop: 60,
        shadowColor: '#666',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3,
        borderBottomRightRadius: 20,
        borderBottomLeftRadius: 20
    },
    buttonInput: {
        flexDirection: 'row',
        borderWidth: 1,
        alignItems: 'center',
        borderColor: Constants.color.border,
        borderRadius: 10,
        marginHorizontal: 30,
        paddingHorizontal: 10
    },
    iconPoint: {
        width: 25,
        height: 25
    },
    textRemittanceAmount: {
        fontSize: 20,
        marginBottom: 10,
        marginTop: 50,
        marginLeft: 30,
        color: Constants.color.black,
        fontFamily: Constants.font.PoppinsSemiBold
    },
    textInput: {
        fontSize: 14,
        fontFamily: Constants.font.PoppinsMedium,
        flex: 1,
        paddingVertical: 10
    },
    viewPoint: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        paddingHorizontal: 30,
        marginTop: 20,
        marginBottom: 20
    },
    textAED: {
        fontFamily: Constants.font.PoppinsMedium,
        fontSize: 15
    },
    textTransaction: {
        fontSize: 20,
        fontFamily: Constants.font.PoppinsSemiBold,
        color: Constants.color.black,
        paddingLeft: 20,
        paddingTop: 20,
        paddingBottom: 20
    },
    viewButtonSend: {
        backgroundColor: Constants.color.white,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        shadowColor: '#666',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3
    },
    viewList: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20
    },
    viewTextName: {
        flex: 1
    },
    ViewTextPoint: {
        marginHorizontal: 20
    },
    textName: {
        fontSize: 16,
        color: Constants.color.black,
        fontFamily: Constants.font.PoppinsSemiBold
    },
    textDate: {
        fontFamily: Constants.font.PoppinsMedium
    },
    textPoint: {
        fontSize: 16,
        fontFamily: Constants.font.PoppinsSemiBold,
        color: Constants.color.black
        // paddingLeft: 20
    },
    textNexusPoint: {
        fontSize: 8,
        fontFamily: Constants.font.PoppinsMedium
    },
    buttonNext: {
        backgroundColor: Constants.color.button,
        marginHorizontal: 20,
        borderRadius: 20,
        marginBottom: 20
    },
    textNext: {
        textAlign: 'center',
        color: Constants.color.white,
        paddingVertical: 10,
        fontFamily: Constants.font.PoppinsMedium
    },
    viewButton: {
        backgroundColor: Constants.color.white,
        paddingTop: 20
    }
})
