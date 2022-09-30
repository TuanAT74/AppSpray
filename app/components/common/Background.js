import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import React from 'react'
import Constants from './../../controller/Constants'

const Background = ({ hideLogo = false, color }) => {
    return (
        <View style={{ ...styles.container, backgroundColor: color }}>
            <Image
                source={Constants.icons.ic_background}
                style={{
                    ...styles.imageBrTop
                }}
            />
            <View style={styles.spray}>
                <Image
                    source={Constants.icons.ic_spray}
                    style={{
                        tintColor: hideLogo ? 'transparent' : null
                    }}
                />
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
    imageBrTop: {
        width: Dimensions.get('window').width,
        height: 240
    }
})
