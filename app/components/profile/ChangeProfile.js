import {
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    ScrollView
} from 'react-native'
import React from 'react'
import Background from './../common/Background'
import Icon from 'react-native-vector-icons/Ionicons'
import Constants from './../../controller/Constants'
import { useNavigation } from '@react-navigation/native'

const ChangeProfile = () => {
    const navigation = useNavigation()
    return (
        <ScrollView>
            <View style={styles.container}>
                <Background />
                <View style={styles.viewHeader}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.goBack()
                        }}
                    >
                        <Icon name='chevron-back-outline' size={35} style={styles.icon} />
                    </TouchableOpacity>
                    <Text style={styles.textChangeProfile}>Change Profile</Text>
                    <TouchableOpacity>
                        <Icon name='ios-notifications' size={30} style={styles.icon} />
                    </TouchableOpacity>
                </View>
                <View style={styles.viewChange}>
                    <Image source={Constants.image.img_Avatar} style={styles.imgAvatar} />
                    <View style={{ ...styles.viewInformation, marginTop: 20 }}>
                        <Text style={styles.textName}>Name</Text>
                        <TextInput style={styles.TextInput} placeholder='Jonathan Doe' />
                    </View>
                    <View style={styles.viewInformation}>
                        <Text style={styles.textName}>Phone</Text>
                        <TextInput style={styles.TextInput} placeholder='0912 - 339 -3493' />
                    </View>
                    <View style={styles.viewInformation}>
                        <Text style={styles.textName}>NXD Deposite Address</Text>
                        <TextInput
                            style={styles.TextInput}
                            placeholder='9qNY2zwvjCjSoQDAFGiToG5KwU…..'
                        />
                    </View>
                    <TouchableOpacity style={styles.buttonSave}>
                        <Text style={styles.textSave}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    )
}

export default ChangeProfile

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    viewHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 10,
        marginTop: 20
    },
    textChangeProfile: {
        flex: 1,
        fontSize: 30,
        color: Constants.color.white,
        fontFamily: Constants.font.PoppinsSemiBold
        // includeFontPadding: false
    },
    icon: {
        color: Constants.color.white,
        includeFontPadding: false
    },
    viewChange: {
        backgroundColor: Constants.color.white,
        marginHorizontal: 20,
        marginTop: 20,
        borderRadius: 25
    },
    imgAvatar: {
        width: 65,
        height: 65,
        alignSelf: 'center',
        marginTop: 20
    },
    TextInput: {
        borderWidth: 1,
        borderColor: Constants.color.border,
        borderRadius: 10,
        marginHorizontal: 20,
        paddingVertical: 10,
        paddingHorizontal: 10,
        fontFamily: Constants.font.PoppinsMedium
    },
    textName: {
        fontSize: 20,
        marginHorizontal: 20,
        marginBottom: 5,
        fontFamily: Constants.font.PoppinsMedium,
        color: Constants.color.black
    },
    buttonSave: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30,
        marginHorizontal: 20,
        borderRadius: 25,
        backgroundColor: Constants.color.button,
        marginBottom: 25
    },
    textSave: {
        fontSize: 14,
        fontFamily: Constants.font.PoppinsMedium,
        color: Constants.color.white,
        paddingVertical: 13,
        fontWeight: Constants.font.PoppinsSemiBold
    },
    viewInformation: {
        marginBottom: 20
    }
})
