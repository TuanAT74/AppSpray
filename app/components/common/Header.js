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
                    <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                        <Icon name='chevron-back-outline' size={30} style={styles.icon} />
                    </TouchableOpacity>
                )}
                <Text style={{ ...styles.textProfile, fontSize }}>{title}</Text>
                {showIconSuccess && (
                    <Image source={Constants.icons.ic_Balance} style={styles.iconSuccess} />
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
<<<<<<< HEAD
        padding: 20,
        marginTop: 20,
=======
>>>>>>> 17f81936315e1b88bc7eac663d31f7fa9158c7e1

        marginHorizontal: 20,
        paddingTop: 20,
        marginBottom: 20
    },
    textProfile: {
        fontSize: 30,
        color: Constants.color.white,
        fontFamily: Constants.font.PoppinsSemiBold
    },
    icon: {
        color: Constants.color.white
    },
    iconSuccess: {
        marginLeft: 10
    }
})
