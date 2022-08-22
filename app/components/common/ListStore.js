import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Constants from './../../controller/Constants'
import Icon from 'react-native-vector-icons/Ionicons'

const ListStore = ({ data, title }) => {
    return (
        <View style={styles.viewImageStore}>
            <View style={styles.textStore}>
                <Text style={styles.textRecomended}>{title}</Text>
                <Text style={styles.textSeeAll}>See all</Text>
            </View>
            <FlatList
                data={data}
                horizontal
                renderItem={({ item }) => (
                    <TouchableOpacity>
                        <View style={styles.viewImage}>
                            <Image source={item.img} style={styles.imageStore} />
                            <Image source={Constants.image.img_Shadow} style={styles.imageShadow} />

                            <View style={styles.viewStore}>
                                <Text style={styles.nameStore}>{item.name}</Text>
                                <View style={styles.viewEvaluate}>
                                    <Icon name='ios-star' size={20} color='#ffc107' />
                                    <Text style={{ ...styles.nameStore, paddingLeft: 5 }}>
                                        {item.evaluate}
                                    </Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                )}
            />
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
        marginBottom: 10
    },
    imageStore: {
        borderRadius: 10
    },
    imageShadow: {
        opacity: 0.5,
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
        color: Constants.color.white
    },
    viewImageStore: {
        marginHorizontal: 20
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
        fontFamily: Constants.font.PoppinsRegular
    }
})
