import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import retaurants from '../../../assets/data/restaurants.json'
const RestaurantDetails = () => {
    const restaurant = retaurants[0]
    return (
        <View style={styles.page}>
            <Image source={{ uri: restaurant.image }} style={styles.image} resizeMode="cover" />
            <View style={styles.iconContainer}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>$ {restaurant.deliveryFee} · {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime}minutes</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    image: {
        width: "100%",
        aspectRatio: 5 / 3,
        marginBottom: 5,
        borderRadius: 10
    },
    page: {
        flex: 1
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        marginVertical: 10
    },
    subtitle: {
        color: "#52552",
        fontSize: 15
    },
    container: {
        margin: 10
    },
    iconContainer: {
        backgroundColor: 'white',
        padding: 5,
        position: "absolute",
        top: 40,
        left: 10,
        borderRadius: 50
    }
})

export default RestaurantDetails;
