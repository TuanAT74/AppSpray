import { StyleSheet, Text, View } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
const Tab = createBottomTabNavigator()
import React from 'react'
import Home from './../home/Home'
import Profile from './../profile/Profile'
import Icon from 'react-native-vector-icons/Ionicons'
import Constants from './../../controller/Constants'

const TabBarNavigation = () => {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    let iconName

                    let focusedColor = focused ? Constants.color.button : Constants.color.gray

                    if (route.name === 'Home') {
                        iconName = 'ios-home'
                    } else if (route.name === 'Report') {
                        iconName = 'receipt-outline'
                    } else if (route.name === 'Order') {
                        iconName = 'file-tray-full-outline'
                    } else {
                        iconName = 'person-circle-outline'
                    }
                    return <Icon name={iconName} size={25} color={focusedColor} />
                },
                tabBarActiveTintColor: Constants.color.button,
                tabBarLabelStyle: {
                    fontFamily: Constants.font.PoppinsMedium,
                    fontSize: 12
                }
            })}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='Profile' component={Profile} />
            {/* <Tab.Screen name='Settings' component={SettingsScreen} /> */}
            {/* <Tab.Screen name='Settings' component={SettingsScreen} /> */}
        </Tab.Navigator>
    )
}

export default TabBarNavigation

const styles = StyleSheet.create({})
