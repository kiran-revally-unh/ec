import React from 'react';
import { View, StyleSheet, Image, Text, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const DEFAULT_IMAGE = "https://media.istockphoto.com/id/1176123462/vector/modern-cafe-interior-empty-no-people-restaurant-cafeteria-design-flat-horizontal-vector.jpg?s=612x612&w=0&k=20&c=PwJmg9JELKEqtpN3k_GTJvD_6HuWckvN3GE2c4mlB-I="
const RestaurantItem = ({ restaurant }) => {
    const navigation = useNavigation()
    const onPress = () => {
        navigation.navigate("Restaurant", { id: restaurant.id })
    }
    return (
        <Pressable onPress={onPress} style={styles.restaurantContainer}>
            <Image source={{ uri: restaurant.image.startsWith('http') ? restaurant.image : DEFAULT_IMAGE }} style={styles.image} />
            <View style={styles.row}>
                <View>
                    <Text style={styles.title}>{restaurant.name}</Text>
                    <Text style={styles.subtitle}>$ {restaurant.deliveryFee.toFixed(2)} · {restaurant.minDeliveryTime} - {restaurant.maxDeliveryTime}minutes</Text>
                </View>
                <View style={styles.rating}>
                    <Text>{restaurant.rating.toFixed(1)}</Text>
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
