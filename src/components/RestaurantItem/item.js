import React from 'react';
import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const RestaurantItem = ({ restaurant }) => {
    const navigation = useNavigation()
    const onPress = () => {
        navigation.navigate("Restaurant", { id: restaurant.id })
    }
    return (
        <Pressable onPress={onPress} style={styles.restaurantContainer}>
            <Image source={{ uri: restaurant.image }} style={styles.image} />
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>{restaurant.name}</Text>
                    <Text style={styles.subtitle}>$ {restaurant.deliveryFee} · {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime}minutes</Text>
                </View>
                <View style={styles.rating}>
                    <Text>{restaurant.rating}</Text>
                </View>
            </View>
        </Pressable>
    );
}

const styles = StyleSheet.create({
    restaurantContainer: {
        width: "100%",
        marginVertical: 10
    },
    image: {
        width: "100%",
        aspectRatio: 5 / 3,
        marginBottom: 5,
        borderRadius: 10

    },
    title: {
        fontSize: 16,
        fontWeight: '500',
        marginVertical: 5
    },
    subtitle: {
        color: "grey"
    },
    row: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignContent: "center"
    },
    rating: {
        marginLeft: "auto",
        backgroundColor: "lightgray",
        width: 30,
        height: 30,
        alignItems: "center",
        borderRadius: 20,
        justifyContent: "center"
    }
})

export default RestaurantItem;
