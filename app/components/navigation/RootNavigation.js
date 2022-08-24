import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './../home/Home'
import Login from './../auth/Login'
import Constants from './../../controller/Constants'
import { NavigationContainer } from '@react-navigation/native'
import Background from './../common/Background'
import Register from '../auth/Register'
import ConfirmRegister from './../auth/ConfirmRegister'
import SetPass from './../auth/SetPass'
import TabBarNavigation from './TabBarNavigation'
import History from './../home/History'
import Scan from './../home/Scan'
import Charge from '../home/Charge'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName='Register'
            >
                <Stack.Screen
                    name={Constants.screenName.TabBarNavigation}
                    component={TabBarNavigation}
                />
                <Stack.Screen name={Constants.screenName.Register} component={Register} />
                <Stack.Screen name={Constants.screenName.Login} component={Login} />
                {/* <Stack.Screen name={Constants.screenName.Background} component={Background} /> */}
                <Stack.Screen
                    name={Constants.screenName.ConfirmRegister}
                    component={ConfirmRegister}
                />
                <Stack.Screen name={Constants.screenName.SetPass} component={SetPass} />
                <Stack.Screen name={Constants.screenName.History} component={History} />
                <Stack.Screen name={Constants.screenName.Scan} component={Scan} />
                <Stack.Screen name={Constants.screenName.Charge} component={Charge} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation

const styles = StyleSheet.create({})
