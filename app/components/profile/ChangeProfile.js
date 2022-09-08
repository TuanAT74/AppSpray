import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Background from './../common/Background'

const ChangeProfile = () => {
    return (
        <View style={styles.container}>
            <Background />
        </View>
    )
}

export default ChangeProfile

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
