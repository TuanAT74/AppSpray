import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import Background from '../common/Background'
import Constants from '../../controller/Constants'
import Header from '../common/Header'
import { useNavigation } from '@react-navigation/native'

const Complete = () => {
    const navigation = useNavigation()
    return (
        <>
            <Background color={Constants.color.white} />
            <ScrollView style={styles.container}>
                <Header
                    title='Send Nexus Point'
                    fontSize={25}
                    showBackButton={true}
                    showNotification={false}
                />
                <View style={styles.boxContent}>
                    <Text style={styles.textTitle}>Payment complete</Text>
                    <Image source={Constants.image.img_Complete} style={styles.img} />
                    <TouchableOpacity
                        onPress={() => navigation.navigate(Constants.screenName.SuccessTransaction)}
                        style={styles.button}
                    >
                        <Text style={styles.textButton}>Confirm</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </>
    )
}

export default Complete

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
        textAlign: 'center'
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
        color: Constants.color.white
    }
})
