import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import Constants from './../../controller/Constants'

const Background = () => {
    return (
        <View style={styles.container}>
            <View style={styles.background}>
                <Image source={Constants.icons.ic_background} />
            </View>
            <View style={styles.spray}>
                <Image source={Constants.icons.ic_spray} />
            </View>
        </View>
    )
}

export default Background

const styles = StyleSheet.create({
    container: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        backgroundColor: Constants.color.white
    },
    spray: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 50
    },
    background: {
        alignItems: 'center',
        justifyContent: 'center',
        height: Dimensions.get('window').width * 0.68
    }
})
