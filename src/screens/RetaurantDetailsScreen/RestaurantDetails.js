import React from 'react';
import { View, StyleSheet, Text, Image, FlatList, Pressable, ActivityIndicator } from 'react-native';
// import restaurants from '../../../assets/data/restaurants.json'
import DishListItem from '../../components/DishListItem/dishListItem';
import RestaurantHeader from './RestaurantHeader';
import { AntDesign } from '@expo/vector-icons';
import { useRoute, useNavigation } from '@react-navigation/native';
import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Restuarant } from '../../models';
const RestaurantDetails = () => {
    // const restaurant = restaurants[0]
    const [restaurant, setRestaurant] = useState(null)
    const route = useRoute()
    const id = route.params?.id;
    const fetchRestaurant = () => {
        DataStore.query(Restuarant, id).then(setRestaurant)
    }
    useEffect(() => {
        //fetch the restaurant with id
        fetchRestaurant()
    }, [])
    const navigation = useNavigation()
    if (!restaurant) {
        return <ActivityIndicator size={'large'} color='gray' style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50, paddingVertical: 30 }} />
    }
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
