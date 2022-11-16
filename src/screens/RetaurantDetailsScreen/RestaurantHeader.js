import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
const RestaurantHeader = ({ restaurant }) => {
    return (
        <View >
            <Image source={{ uri: restaurant.image }} style={styles.image} resizeMode="cover" />
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
})

export default RestaurantHeader;
