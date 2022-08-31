import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Constants from './../../controller/Constants'
import Background from './../common/Background'

const Profile = () => {
    return (
        <View style={styles.container}>
            <Background color='#F7F7F7' />
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})
