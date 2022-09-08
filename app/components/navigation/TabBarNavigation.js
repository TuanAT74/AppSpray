import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React from 'react'
import Home from './../home/Home'
import Profile from './../profile/Profile'
import Icon from 'react-native-vector-icons/Ionicons'
import Constants from './../../controller/Constants'
import History from './../home/History'
import Scan from './../home/Scan'
import { useNavigation } from '@react-navigation/native'
import ChangeProfile from './../profile/ChangeProfile'

const Tab = createBottomTabNavigator()

const TabBarNavigation = () => {
    const navigation = useNavigation()
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarIcon: ({ focused }) => {
                    let iconName

                    let focusedColor = focused ? Constants.color.button : Constants.color.gray

                    if (route.name === 'Home') {
                        iconName = 'ios-home'
                    } else if (route.name === 'Charge') {
                        iconName = 'ios-git-compare-outline'
                    } else if (route.name === 'History') {
                        iconName = 'ios-timer-outline'
                    } else if (route.name === 'Profile') {
                        iconName = 'person-circle-outline'
                    }
                    return <Icon name={iconName} size={25} color={focusedColor} />
                },
                tabBarActiveTintColor: Constants.color.button,
                tabBarLabelStyle: {
                    fontFamily: Constants.font.PoppinsMedium,
                    fontSize: 12
                },
                tabBarStyle: {
                    paddingBottom: 5,
                    height: 65,
                    paddingTop: 5
                }
            })}
        >
            <Tab.Screen name='Home' component={Home} />
            <Tab.Screen name='History' component={History} />
            <Tab.Screen
                name='Scan'
                component={Scan}
                options={{
                    tabBarIcon: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate(Constants.screenName.Scan)}
                        >
                            <Image
                                source={Constants.icons.ic_Scan}
                                resizeMode='contain'
                                style={{
                                    width: 70,
                                    height: 70,
                                    marginBottom: 30
                                }}
                            />
                        </TouchableOpacity>
                    )
                }}
            />
            <Tab.Screen name='Charge' component={ChangeProfile} />
            <Tab.Screen name='Profile' component={Profile} />
        </Tab.Navigator>
    )
}

export default TabBarNavigation

const styles = StyleSheet.create({})
