import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import Background from './../common/Background'
import Icon from 'react-native-vector-icons/Ionicons'
import Constants from './../../controller/Constants'
import ListStore from './../common/ListStore'
import HeaderHome from './../common/HeaderHome'
import CommonAPIs from './../../controller/APIs/CommonAPIs'
import { useRoute } from '@react-navigation/native'
import StorageManager from './../../controller/APIs/StorageManager'
import AppManager from './../../controller/APIs/AppManager'

const Home = () => {
    const [selected, setSelected] = useState(1)
    const [listCategory, setListCategory] = useState([])

    const GetCategory = () => {
        CommonAPIs.category()
            .then((res) => {
                setListCategory(res.data)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    useEffect(() => {
        GetCategory()
    }, [])

    return (
        <View style={styles.container}>
            <Background hideLogo={true} />
            <HeaderHome />
            <ScrollView style={styles.scrollView}>
                <View style={styles.viewCategory}>
                    <FlatList
                        data={listCategory}
                        horizontal
                        renderItem={({ item }) => (
                            <TouchableOpacity
                                style={{
                                    ...styles.buttonCategory,
                                    backgroundColor:
                                        selected == item.id ? Constants.color.buttonHome : '#EAEAF6'
                                }}
                                onPress={() => {
                                    setSelected(item.id)
                                }}
                            >
                                <View style={styles.button}>
                                    <Image
                                        source={{
                                            uri: item.icon_parent
                                        }}
                                        style={styles.imageStore}
                                    />
                                    <Text
                                        style={{
                                            ...styles.textCategory,
                                            color:
                                                selected == item.id
                                                    ? Constants.color.white
                                                    : Constants.color.buttonHome
                                        }}
                                    >
                                        {item.parent_name}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        )}
                    />
                </View>
                <ListStore data={listCategory[0]} />
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
        paddingVertical: 5,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginRight: 10,
        justifyContent: 'center'
    },
    viewCategory: {
        flexDirection: 'row',
        marginBottom: 30,
        marginRight: 10,
        marginLeft: 20
    },
    button: {
        flexDirection: 'row'
    },
    textCategory: {
        color: Constants.color.buttonHome,
        fontFamily: Constants.font.PoppinsMedium
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
    },
    scrollView: {
        marginTop: 30
        // marginBottom: 10
    },
    imageStore: {
        height: 20,
        width: 20,
        borderRadius: 20,
        marginRight: 5
    }
})
