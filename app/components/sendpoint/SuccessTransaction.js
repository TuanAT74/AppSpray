import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import { useNavigation, useRoute } from '@react-navigation/native'
import Background from '../common/Background'
import Constants from '../../controller/Constants'
import Header from '../common/Header'

const SuccessTransaction = () => {
    const navigation = useNavigation()
    const route = useRoute()
    const name = route.params?.name ?? ''
    const balance = route.params?.balance ?? 0
    const amount = route.params?.amount ?? 0
    const transaction_fee = route.params?.transaction_fee ?? 0

    return (
        <>
            <Background color={Constants.color.white} />
            <ScrollView style={styles.container}>
                <Header title='Successful' showIconSuccess={true} fontSize={25} />
                <View style={styles.boxContent}>
                    <View style={styles.image}>
                        <Image
                            source={Constants.image.img_SuccessTransaction}
                            style={styles.icon}
                        />
                    </View>
                    <Text style={styles.textTitle}>Successful Transaction</Text>
                    <View style={[styles.info, styles.infoName]}>
                        <Text style={styles.textInfoDefault}>Name</Text>
                        <Text style={styles.textInfoTransaction}>{name}</Text>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.textInfoDefault}>Balance in Wallet</Text>
                        <View style={styles.point}>
                            <Text style={styles.textInfoTransaction}>{balance}</Text>
                            <Text style={styles.textNexusPoint}>Nexus Point</Text>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.textInfoDefault}>Amount</Text>
                        <View style={styles.point}>
                            <Text style={styles.textInfoTransaction}>-{amount}</Text>
                            <Text style={styles.textNexusPoint}>Nexus Point</Text>
                        </View>
                    </View>
                    <View style={styles.info}>
                        <Text style={styles.textInfoDefault}>Transaction Fee</Text>
                        <View style={styles.point}>
                            <Text style={styles.textInfoTransaction}>{transaction_fee}</Text>
                            <Text style={styles.textNexusPoint}>Nexus Point</Text>
                        </View>
                    </View>
                    <TouchableOpacity
                        onPress={() => navigation.navigate(Constants.screenName.Home)}
                        style={styles.button}
                    >
                        <Text style={styles.textButton}>Back to home</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

export default SuccessTransaction

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textTitle: {
        fontSize: 24,
        color: Constants.color.black,
        textAlign: 'center',
        marginTop: 13,
        fontFamily: Constants.font.PoppinsSemiBold,
        marginBottom: 38
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
        elevation: 3
    },
    image: {
        alignSelf: 'center',
        marginTop: 30
    },
    icon: {
        width: 130,
        height: 140
    },
    info: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 15,
        marginBottom: 17,
        alignItems: 'center'
    },
    textInfoDefault: {
        fontFamily: Constants.font.PoppinsSemiBold,
        color: Constants.color.black,
        fontSize: 16
    },
    textInfoTransaction: {
        fontFamily: Constants.font.PoppinsMedium,
        fontSize: 16
    },
    point: {
        alignItems: 'flex-end'
    },
    textNexusPoint: {
        fontSize: 8,
        fontFamily: Constants.font.PoppinsSemiBold
    },
    infoName: {
        borderBottomWidth: 1,
        borderStyle: 'dashed',
        borderColor: Constants.color.border,
        paddingBottom: 16
    },
    button: {
        backgroundColor: Constants.color.button,
        marginHorizontal: 20,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20
    },
    textButton: {
        marginVertical: 13,
        color: Constants.color.white,
        fontFamily: Constants.font.PoppinsSemiBold,
        fontSize: 14
    }
})
