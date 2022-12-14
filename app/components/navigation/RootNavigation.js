import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from './../auth/Login'
import Constants from './../../controller/Constants'
import { NavigationContainer } from '@react-navigation/native'
import Register from '../auth/Register'
import ConfirmRegister from './../auth/ConfirmRegister'
import SetPass from './../auth/SetPass'
import TabBarNavigation from './TabBarNavigation'
import History from './../home/History'
import Scan from './../home/Scan'
import ChangeProfile from './../profile/ChangeProfile'
import Convert from './../home/Convert'
import StoreDetail from './../home/StoreDetail'

import SuccessTransaction from '../sendpoint/SuccessTransaction'
import SendPoint from '../sendpoint/SendPoint'

import RemittanceAmount from './../sendpoint/RemittanceAmount'
import PaymentDetails from './../sendpoint/PaymentDetails'

const Stack = createNativeStackNavigator()

const RootNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false
                }}
                initialRouteName='Login'
            >
                <Stack.Screen
                    name={Constants.screenName.TabBarNavigation}
                    component={TabBarNavigation}
                />
                <Stack.Screen name={Constants.screenName.Register} component={Register} />
                <Stack.Screen name={Constants.screenName.Login} component={Login} />
                <Stack.Screen
                    name={Constants.screenName.ConfirmRegister}
                    component={ConfirmRegister}
                />
                <Stack.Screen name={Constants.screenName.SetPass} component={SetPass} />
                <Stack.Screen name={Constants.screenName.History} component={History} />
                <Stack.Screen name={Constants.screenName.Scan} component={Scan} />
                <Stack.Screen name={Constants.screenName.Convert} component={Convert} />
                <Stack.Screen name={Constants.screenName.ChangeProfile} component={ChangeProfile} />
                <Stack.Screen name={Constants.screenName.StoreDetail} component={StoreDetail} />
                <Stack.Screen
                    name={Constants.screenName.SuccessTransaction}
                    component={SuccessTransaction}
                />
                <Stack.Screen name={Constants.screenName.SendPoint} component={SendPoint} />
                <Stack.Screen
                    name={Constants.screenName.RemittanceAmount}
                    component={RemittanceAmount}
                />
                <Stack.Screen
                    name={Constants.screenName.PaymentDetails}
                    component={PaymentDetails}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default RootNavigation

const styles = StyleSheet.create({})
