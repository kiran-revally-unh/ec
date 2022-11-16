import React from 'react';
import { View, StyleSheet, Text, Image, FlatList } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json'
import DishListItem from '../../components/DishListItem/dishListItem';
import RestaurantHeader from './RestaurantHeader';
import { AntDesign } from '@expo/vector-icons';
const RestaurantDetails = () => {
    const restaurant = restaurants[0]
    return (
        <View style={styles.page}>
            <FlatList data={restaurant.dishes}
                ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
                renderItem={({ item }) => <DishListItem dish={item} />} />
            <View style={styles.iconContainer}>
                <AntDesign name="arrowleft" size={24} color="black" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        flex: 1
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
