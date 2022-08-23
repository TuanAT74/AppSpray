import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Background from './../common/Background'
import Icon from 'react-native-vector-icons/Ionicons'
import Constants from './../../controller/Constants'
import HeaderHome from '../background/HeaderHome'
import ListStore from './../common/ListStore'

const category = [
    {
        id: 1,
        name: 'All',
        type: 'All'
    },
    {
        id: 2,
        name: 'Restaurant',
        type: 'Restaurant',
        img: Constants.icons.ic_Restaurant
    },
    {
        id: 3,
        name: 'Fashion',
        type: 'Fashion',
        icon: 'ios-apps',
        img: Constants.icons.ic_Fashion
    },
    {
        id: 4,
        name: 'Car',
        type: 'Car',
        img: Constants.icons.ic_Car
    },
    {
        id: 5,
        name: 'Electronic',
        type: 'Electronic',
        img: Constants.icons.ic_Car
    },
    {
        id: 6,
        name: 'Health',
        type: 'Health',
        img: Constants.icons.ic_Car
    }
]

const listStore = [
    { id: 1, img: Constants.image.img_Shushi, name: 'T-JAY SUSHI', evaluate: '4.0' },
    { id: 2, img: Constants.image.img_Caffe, name: 'T-JAY CAFE', evaluate: '4.0' },
    { id: 3, img: Constants.image.img_Noodles, name: 'T-JAY CAFE', evaluate: '4.0' },
    { id: 4, img: Constants.image.img_Caffe, name: 'T-JAY CAFE', evaluate: '4.0' }
]

const listStore1 = [
    { id: 1, img: Constants.image.img_Seafood, name: 'T-JAY SUSHI', evaluate: '4.0' },
    { id: 2, img: Constants.image.img_Noodles, name: 'T-JAY CAFE', evaluate: '4.0' },
    { id: 3, img: Constants.image.img_Seafood, name: 'T-JAY CAFE', evaluate: '4.0' },
    { id: 4, img: Constants.image.img_Caffe, name: 'T-JAY CAFE', evaluate: '4.0' }
]

const Home = () => {
    const [selected, setSelected] = useState(category[0])

    return (
        <View style={styles.container}>
            <Background hideLogo={true} />

            <HeaderHome />
            <ScrollView>
                <View style={styles.viewCategory}>
                    <FlatList
                        data={category}
                        horizontal
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={{
                                    ...styles.buttonCategory,
                                    backgroundColor:
                                        selected.name == item.type
                                            ? Constants.color.buttonHome
                                            : '#EAEAF6'
                                }}
                                onPress={() => {
                                    setSelected(item)
                                }}
                            >
                                <View style={styles.button}>
                                    <Image source={item.img} />
                                    <Text
                                        style={{
                                            ...styles.textCategory,
                                            color:
                                                selected.name == item.type
                                                    ? Constants.color.white
                                                    : Constants.color.buttonHome
                                        }}
                                    >
                                        {item.name}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>

                <ListStore data={listStore} title='Recomended Store' />
                <ListStore data={listStore1} title='Restaurant' />
            </ScrollView>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    buttonCategory: {
        backgroundColor: Constants.color.buttonHome,
        borderRadius: 20,
        paddingVertical: 8,
        alignItems: 'center',
        paddingHorizontal: 20,

        marginRight: 10,
        justifyContent: 'center'
    },
    viewCategory: {
        flexDirection: 'row',
        marginVertical: 20,
        marginBottom: 30,
        marginHorizontal: 20
    },
    button: {
        flexDirection: 'row'
    },
    textCategory: {
        color: Constants.color.buttonHome,
        fontFamily: 'Rubik-Medium'
    },
    textStore: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20
    },
    textRecomended: {
        fontSize: 16,
        fontFamily: Constants.font.PoppinsMedium,
        color: Constants.color.black,
        marginBottom: 10
    },
    textSeeAll: {
        fontSize: 12,
        fontFamily: Constants.font.PoppinsRegular
    }
})
