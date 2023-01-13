import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Auth, DataStore } from 'aws-amplify'
import { User } from '../../models'
import { useAuthContext } from '../../contexts/AuthContext'
//put feature in authentication by calling function of signout from aws amplify
const ProfileScreen = () => {
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [lng, setLng] = useState("0")
    const [lat, setLat] = useState("0")
    // take sub from useContext
    const { sub, setDbUser } = useAuthContext()
    const onSave = async () => {
        try {
            const user = await DataStore.save(new User({ name, address, lat: parseFloat(lat), lng: parseFloat(lng), sub }))
            setDbUser(user)

        } catch (error) {
            Alert.alert("Error", error.message)
        }
    }
    return (
        <SafeAreaView>
            <Text style={styles}>Profile</Text>
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