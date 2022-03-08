import React, { useEffect, useState } from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity,
    PermissionsAndroid
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Contacts from 'react-native-contacts';
import { useIsFocused } from '@react-navigation/native';
import ContactCard from '../Components/ContactCard';


export default function MyContacts({ navigation }) {

    const isFocused = useIsFocused();

    const [myContacts, setMyContacts] = useState([])

    useEffect(() => {
        getAllContacts();
    }, [isFocused])

    // const permission = PermissionsAndroid.request(
    //     PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
    //     {
    //         'title': 'Contacts',
    //         'message': 'This app would like to view your contacts.',
    //         'buttonPositive': 'Please accept bare mortal'
    //     }
    // )
    // console.log(permission)
    // if (permission === 'granted') {

    //     const contacts = Contacts.getAll();
    //     console.log('skdf', contacts);
    //     setMyContacts(contacts);
    // }

    async function getAllContacts() {
        try {
            const permission = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS
            )
            if (permission === 'granted') {
                console.log(permission)
                const contacts = await Contacts.getAll();
                console.log('skdf', contacts);
                setMyContacts(contacts);
            }
        } catch (error) {
            console.log(error);
        }
    }


    return (
        <View>
            {/* <Ionicons
                name="add-circle"
                size={62}
                color="green"
                style={styles.addIcon}
                onPress={() => navigation.navigate('CreateContact')}
            /> */}
            <FlatList
                data={myContacts}
                keyExtractor={(item) => item.recordID}
                renderItem={({ item }) => (
                    <TouchableOpacity onPress={() => navigation.navigate('Profile', {
                        contactInfo: { id: item.recordID }
                    })}>
                        <ContactCard contactInfo={item} />
                    </TouchableOpacity>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    addIcon: {

        position: 'absolute',
        zIndex: 1,
    }
})