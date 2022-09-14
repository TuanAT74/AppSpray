import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native'
import React from 'react'
import RootNavigation from './app/components/navigation/RootNavigation'

const App = () => {
    return (
        <>
            <StatusBar translucent backgroundColor='transparent' />
            <RootNavigation />
        </>
    )
}

export default App

const styles = StyleSheet.create({})
