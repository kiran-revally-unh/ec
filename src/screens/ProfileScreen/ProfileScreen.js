import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Auth, DataStore } from 'aws-amplify'
import { User } from '../../models'
import { useAuthContext } from '../../contexts/AuthContext'
import { useNavigation } from '@react-navigation/native'
//put feature in authentication by calling function of signout from aws amplify
const ProfileScreen = () => {
    const { dbUser } = useAuthContext()
    const [name, setName] = useState(dbUser ? dbUser.name : "")
    const [address, setAddress] = useState(dbUser ? dbUser.address : "")
    const [lng, setLng] = useState(dbUser ? dbUser.lng + " " : "0")
    const [lat, setLat] = useState(dbUser ? dbUser.lat + " " : "0")
    const navigation = useNavigation()
    // take sub from useContext
    const { sub, setDbUser } = useAuthContext()
    const onSave = async () => {
        if (dbUser) {
            await updateUser()
        } else {
            await createUser()
        }
        navigation.goBack()
    }
    const updateUser = async () => {
        try {
            const user = await DataStore.save(User.copyOf(dbUser, (users) => { users.name = name; users.address = address; users.lat = parseFloat(lat); users.lng = parseFloat(lng) }))
            setDbUser(user)
        } catch (error) {
            Alert.alert("Error", error.message)
        }
    }

    const createUser = async () => {
        try {
            const user = await DataStore.save(new User({ name, address, lat: parseFloat(lat), lng: parseFloat(lng), sub }))
            setDbUser(user)

        } catch (error) {
            Alert.alert("Error", error.message)
        }
    }
    return (
        <SafeAreaView>
            <Text style={{ margin: 20 }}>Profile</Text>
            <TextInput value={name} onChangeText={setName} placeholder="Name" style={styles.input} />
            <TextInput value={address} onChangeText={setAddress} placeholder="Address" style={styles.input} />
            <TextInput value={lat} onChangeText={setLat} placeholder="Latitute" style={styles.input} />
            <TextInput value={lng} onChangeText={setLng} placeholder="Longitute" style={styles.input} />
            <Button onPress={() => onSave()} title="Save" />
            <Text onPress={() => Auth.signOut()} style={{ textAlign: 'center', color: 'red', margin: 10 }} >Sign Out</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "600",
        textAlign: 'center',
        margin: 10
    },
    input: {
        margin: 10,
        backgroundColor: 'white',
        padding: 15,
        borderRadius: 5
    }
})
export default ProfileScreen