import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import Constants from './../../controller/Constants'
import Background from '../common/Background'
import Icon from 'react-native-vector-icons/Ionicons'

const StoreDetail = () => {
    return (
        <View style={styles.container}>
            <Background color='#F7F7F7' />
            <View style={styles.viewImageHeader}>
                <Image source={Constants.image.storeDetail} style={styles.imageStore} />
                <Image source={Constants.image.shadow} style={styles.imageShadow} />
                <View style={styles.viewIcon}>
                    <Icon name='chevron-back-outline' size={50} color={Constants.color.white} />
                    <Icon name='ios-notifications' size={40} color={Constants.color.white} />
                </View>
                <TouchableOpacity style={styles.buttonStore}>
                    <Image source={Constants.icons.car} />
                    <Text style={styles.textStore}>Restaurant</Text>
                </TouchableOpacity>
                <Text style={styles.textName}>T-JAY SUSHI</Text>
                <View style={styles.viewGps}>
                    <Image source={Constants.icons.gps} />
                    <Text style={styles.textGps}>
                        Financial Center Street, Along Sheikh Zayed Road, Next to Burj Khalifa
                    </Text>
                </View>
                <View style={styles.viewEvaluate}>
                    <Icon name='ios-star' size={18} color='#ffc107' />
                    <Text style={{ ...styles.nameStore, paddingLeft: 5 }}>4.0</Text>
                </View>
            </View>
        </View>
    )
}

export default StoreDetail

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    imageStore: {
        width: Dimensions.get('window').width,
        height: 420,
        ...StyleSheet.absoluteFillObject
    },
    viewIcon: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingTop: 20
    },
    imageShadow: {
        opacity: 0.8,
        borderRadius: 15,
        width: Dimensions.get('window').width,
        height: 420,
        ...StyleSheet.absoluteFillObject
    },
    buttonStore: {
        flexDirection: 'row',
        backgroundColor: Constants.color.buttonHome,
        borderRadius: 20,
        alignItems: 'center',
        width: 130,
        paddingHorizontal: 10,
        marginTop: 40,
        marginLeft: 20,
        paddingVertical: 7,
        justifyContent: 'center'
    },
    textStore: {
        color: Constants.color.white,
        fontFamily: Constants.font.PoppinsMedium
    },
    textName: {
        color: Constants.color.white,
        fontFamily: Constants.font.PoppinsSemiBold,
        fontSize: 30,
        marginLeft: 20,
        marginTop: 10
    },
    viewGps: {
        flexDirection: 'row',
        marginHorizontal: 20,
        alignItems: 'center'
    },
    textGps: {
        color: Constants.color.white,
        fontFamily: Constants.font.PoppinsMedium,
        marginHorizontal: 15
    },
    viewEvaluate: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 20,
        marginTop: 10
    },
    nameStore: {
        fontSize: 14,
        color: Constants.color.white,
        fontFamily: Constants.font.PoppinsMedium,
        includeFontPadding: false,
        justifyContent: 'center'
    }
})
