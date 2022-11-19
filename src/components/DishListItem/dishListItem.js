import React from 'react';
import { View, StyleSheet, Text, Image, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const DishListItem = ({ dish }) => {
    const navigation = useNavigation();
    return (
        <Pressable onPress={() => navigation.navigate("Dish", { id: dish.id })} style={styles.container}>
            <View style={{ flex: 1 }}>
                <Text style={styles.name}>{dish.name}</Text>
                <Text style={styles.description} numberOfLines={2}>{dish.description}</Text>
                <Text style={styles.price}>$ · {dish.price}</Text>
            </View>
            {dish.image && <Image style={styles.image} source={{ uri: dish.image }} />}
        </Pressable>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 5,
        margin: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        paddingBottom: 10,
        borderRadius: 5,
        flexDirection: 'row'
    },
    name: {
        fontWeight: "600",
        fontSize: 17,
        letterSpacing: 0.5
    },
    description: {
        color: "gray",
        marginVertical: 5

    },
    price: {
        fontSize: 15
    },
    image: {
        height: 75,
        aspectRatio: 1
    }
})

export default DishListItem;
