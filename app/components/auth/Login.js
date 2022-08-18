import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Login = () => {
    return (
        <View style={styles.container}>
            <Header screen='Background' />
            <Text style={styles.text}>Login</Text>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    textLogin: {
        fontSize: 20,
        color: '#000',
        fontFamily: 'Poppins-Medium'
    }
})
