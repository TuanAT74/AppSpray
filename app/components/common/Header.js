import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'
import Constants from '../../controller/Constants'

const Header = ({
    title = 'HOME',
    showBackButton = false,
    showNotification = true,
    fontSize = 30,
    showIconSuccess = false
}) => {
    const navigation = useNavigation()
    return (
        <View style={styles.viewProfile}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                {showBackButton && (
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => navigation.goBack()}
                        activeOpacity={0.6}
                    >
                        <Image source={Constants.icons.left} style={styles.icon} />
                    </TouchableOpacity>
                )}
                <Text style={{ ...styles.textProfile, fontSize }}>{title}</Text>
                {showIconSuccess && (
                    <Image source={Constants.icons.balance} style={styles.iconSuccess} />
                )}
            </View>

            {showNotification && (
                <TouchableOpacity>
                    <Icon name='ios-notifications' size={30} color={Constants.color.white} />
                </TouchableOpacity>
            )}
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    viewProfile: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        paddingTop: 20,
        marginBottom: 20
    },
    textProfile: {
        fontSize: 30,
        color: Constants.color.white,
        fontFamily: Constants.font.PoppinsSemiBold,
        includeFontPadding: false
    },
    icon: {
        color: Constants.color.white,
        width: 12,
        height: 23,
        marginRight: 10
    },
    iconSuccess: {
        marginLeft: 10,
        resizeMode: 'contain'
    }
})
