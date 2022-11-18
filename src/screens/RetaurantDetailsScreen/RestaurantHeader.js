import React from 'react';
import { View, StyleSheet, Image, Text } from 'react-native';
const RestaurantHeader = ({ restaurant }) => {
    return (
        <View style={styles.menuContainer}>
            <Image source={{ uri: restaurant.image }} style={styles.image} resizeMode="cover" />
            <View style={styles.container}>
                <Text style={styles.title}>{restaurant.name}</Text>
                <Text style={styles.subtitle}>$ {restaurant.deliveryFee} · {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime}minutes</Text>
            </View>
            <Text style={styles.menuTitle}>Menu</Text>
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
    menuTitle: {
        fontSize: 20,
        letterSpacing: 0.4,
        fontWeight: '600',
        paddingHorizontal: 20,
        margin: 5
    },
    menuContainer: {
        borderBottomColor: 'lightgray',
        borderWidth: 1
    }
})

export default RestaurantHeader;
