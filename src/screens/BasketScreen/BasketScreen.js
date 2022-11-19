import { View, Text, StyleSheet, FlatList, Pressable } from 'react-native'
import restaurants from "../../../assets/data/restaurants.json"
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
const BasketScreen = () => {
    const restaurant = restaurants[0]
    const navigation = useNavigation()
    // const getTotalPrice = () => {
    //     return (dish.price * qty).toFixed(2)
    // }
    return (
        <View style={styles.page}>
            <Text style={styles.title}>{restaurant.name}</Text>
            <Text style={styles.yourItem}>Your Items</Text>

            <FlatList data={restaurant.dishes}
                renderItem={({ item }) => {
                    return (<View style={styles.row}>
                        <View style={styles.qtyContainer}>
                            <Text>1</Text>
                        </View>
                        <Text style={{ marginLeft: 5, fontSize: 15, fontWeight: '500' }}>{item.name}</Text>
                        <Text style={{ marginLeft: 'auto', fontSize: 15 }}>$ · {item.price}</Text>
                    </View>
                    )
                }}
            />

            <View style={styles.button}>
                <Text style={styles.buttonText}> Create Order</Text>
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 40,//temp fix
        padding: 10,
    },
    yourItem: {
        color: 'white',
        fontSize: 15,
        fontWeight: '500',
        letterSpacing: 1,
        paddingHorizontal: 5,
        marginTop: 5,
        backgroundColor: 'gray',
        width: 100,
        marginRight: 'auto',
        textAlign: 'center',
        padding: 3,
        overflow: 'hidden',
        borderRadius: 10
    },
    title: {
        fontSize: 24,
        fontWeight: '600',
        marginVertical: 10,
    },
    separator: {
        height: 1,
        backgroundColor: 'gray',

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        borderBottomColor: 'gray',
        borderBottomWidth: 1,
        padding: 2,
        borderBottomEndRadius: 3,
        marginBottom: 4,
        borderStartColor: "lightgray",
        paddingBottom: 3
    },
    qty: {
        fontSize: 25,
        marginHorizontal: 20
    },
    button: {
        backgroundColor: 'black',
        marginTop: 'auto',
        padding: 20,
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 20,
        color: 'white'
    },
    qtyContainer: {
        backgroundColor: 'lightgray',
        paddingHorizontal: 5,
        paddingVertical: 2,
        margin: 2,
        borderRadius: 3
    }

})
export default BasketScreen