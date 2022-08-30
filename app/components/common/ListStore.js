import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Constants from './../../controller/Constants'
import Icon from 'react-native-vector-icons/Ionicons'
import CommonAPIs from './../../controller/APIs/CommonAPIs'

const ListStore = ({ data }) => {
    const [listStore, setListStore] = useState([])
    const GetStore = () => {
        CommonAPIs.store(data?.id)
            .then((res) => {
                // console.log('store', res)
                setListStore(res?.data)
            })
            .catch((err) => {
                alert(err.message)
            })
    }

    useEffect(() => {
        GetStore()
    }, [data])

    const showItems = (item) => {
        console.log(item)
        return (
            <TouchableOpacity>
                <View style={styles.viewImage}>
                    <Image source={{ uri: item.item.avatar }} style={styles.imageStore} />
                    <Image source={Constants.image.img_Shadow} style={styles.imageShadow} />
                    <View style={styles.viewStore}>
                        <Text style={styles.nameStore}>{item.item.name}</Text>
                        <View style={styles.viewEvaluate}>
                            <Icon name='ios-star' size={15} color='#ffc107' />
                            <Text style={{ ...styles.nameStore, paddingLeft: 5 }}>
                                {item.item.rate}
                            </Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.viewImageStore}>
            <View style={styles.textStore}>
                <Text style={styles.textRecomended}>{data?.parent_name}</Text>
                <TouchableOpacity>
                    <Text style={styles.textSeeAll}>See all</Text>
                </TouchableOpacity>
            </View>
            <FlatList data={listStore} horizontal renderItem={showItems} />
        </View>
    )
}

export default ListStore

const styles = StyleSheet.create({
    viewEvaluate: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    viewStore: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
        marginHorizontal: 10,
        justifyContent: 'flex-end',
        marginBottom: 10,
        paddingLeft: 10
    },
    imageStore: {
        borderRadius: 10,
        width: 175,
        height: 175
    },
    imageShadow: {
        opacity: 0.8,
        borderRadius: 15,
        ...StyleSheet.absoluteFillObject,
        height: '100%'
    },
    viewImage: {
        marginRight: 20,
        marginVertical: 10,
        marginBottom: 25
    },
    nameStore: {
        fontSize: 12,
        color: Constants.color.white,
        fontFamily: Constants.font.PoppinsMedium,
        includeFontPadding: false,
        justifyContent: 'center'
    },
    viewImageStore: {
        marginLeft: 20
    },
    textStore: {
        flexDirection: 'row',
        justifyContent: 'space-between'
        // marginHorizontal: 20
    },
    textRecomended: {
        fontSize: 16,
        fontFamily: Constants.font.PoppinsMedium,
        color: Constants.color.black,
        marginBottom: 10
    },
    textSeeAll: {
        fontSize: 12,
        fontFamily: Constants.font.PoppinsRegular,
        marginRight: 20
    }
})
