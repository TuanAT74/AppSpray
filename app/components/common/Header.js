import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons'
import { useNavigation } from '@react-navigation/core'

const Header = ({
    title = 'HOME',
    showBackButton = false,
    showNotification = true,
    fontSize = 30
}) => {
    const navigation = useNavigation()
    return (
        <View style={styles.viewProfile}>
            {showBackButton && (
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Icon name='chevron-back-outline' size={30} style={styles.icon} />
                </TouchableOpacity>
            )}
            <Text style={{ ...styles.textProfile, fontSize }}>{title}</Text>
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
        // justifyContent: 'space-between',
        marginHorizontal: 15,
        marginTop: 20,
        marginBottom: 20
    },
    textProfile: {
        fontSize: 30,
        color: Constants.color.white,
        fontFamily: Constants.font.PoppinsMedium,
        flex: 1
    },
    icon: {
        color: Constants.color.white
    }
})
