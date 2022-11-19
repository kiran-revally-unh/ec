import React from 'react';
import { View, StyleSheet, Text, Image, FlatList, Pressable } from 'react-native';
import restaurants from '../../../assets/data/restaurants.json'
import DishListItem from '../../components/DishListItem/dishListItem';
import RestaurantHeader from './RestaurantHeader';
import { AntDesign } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';
const RestaurantDetails = () => {
    const restaurant = restaurants[0]
    const route = useRoute()
    const id = route.params?.id;
    const navigation = useNavigation()
    console.warn(id)
    return (
        <View style={styles.page}>
            <FlatList data={restaurant.dishes}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={() => <RestaurantHeader restaurant={restaurant} />}
                renderItem={({ item }) => <DishListItem dish={item} />} />
            <Pressable onPress={() => navigation.goBack()} style={styles.iconContainer} >
                <AntDesign name="arrowleft" size={24} color="black" />
            </Pressable>
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
