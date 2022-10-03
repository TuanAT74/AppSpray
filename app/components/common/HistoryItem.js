import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const HistoryItem = ({ data }) => {
    return (
        <View style={styles.viewList}>
            <View style={styles.viewButtonSend}>
                <Image source={Constants.icons.sendPink} style={styles.icon} />
            </View>
            <View style={styles.viewTextName}>
                <Text style={styles.textName}>{data.name}</Text>
                <Text style={styles.textDate}>{data.date}</Text>
            </View>
            <View style={styles.textPointView}>
                <Text style={styles.textPoint}>{data.point}</Text>
                <Text style={styles.textNexusPoint}>Nexus Point</Text>
            </View>
        </View>
    )
}

export default HistoryItem

const styles = StyleSheet.create({
    viewList: {
        flexDirection: 'row',
        marginTop: 10,
        marginBottom: 20
    },
    viewTextName: {
        flex: 1
    },
    textPointView: {
        marginHorizontal: 20,
        includeFontPadding: false,
        alignItems: 'flex-end'
    },
    textName: {
        fontSize: 16,
        color: Constants.color.black,
        fontFamily: Constants.font.PoppinsSemiBold
    },
    textDate: {
        fontFamily: Constants.font.PoppinsMedium
    },
    textPoint: {
        fontSize: 16,
        fontFamily: Constants.font.PoppinsSemiBold,
        color: Constants.color.black
    },
    textNexusPoint: {
        fontSize: 8,
        fontFamily: Constants.font.PoppinsMedium
    },
    buttonNext: {
        backgroundColor: Constants.color.button,
        marginHorizontal: 20,
        borderRadius: 20,
        marginBottom: 20
    },
    textNext: {
        textAlign: 'center',
        color: Constants.color.white,
        paddingVertical: 10,
        fontFamily: Constants.font.PoppinsMedium,
        includeFontPadding: false
    },
    viewButton: {
        backgroundColor: Constants.color.white,
        paddingTop: 20
    },
    viewButtonSend: {
        backgroundColor: Constants.color.white,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        marginLeft: 20,
        marginRight: 20,
        shadowColor: '#666',
        shadowOffset: {
            width: 0,
            height: 1
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
        elevation: 3
    }
})
