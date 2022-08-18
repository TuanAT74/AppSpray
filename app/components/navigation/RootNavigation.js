import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Home from './../home/Home'
import Login from './../auth/Login'
import Constants from './../../controller/Constants'
import { NavigationContainer } from '@react-navigation/native'
import Background from './../background/Background'
import Register from '../auth/Register'
import ConfirmRegister from './../auth/ConfirmRegister'
import SetPass from './../auth/SetPass'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name={Constants.screenName.Register} component={Register} />
                <Stack.Screen name={Constants.screenName.Login} component={Login} />
                <Stack.Screen name={Constants.screenName.Background} component={Background} />
                <Stack.Screen
                    name={Constants.screenName.ConfirmRegister}
                    component={ConfirmRegister}
                />
                <Stack.Screen name={Constants.screenName.SetPass} component={SetPass} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation

const styles = StyleSheet.create({})
