
import { StyleSheet, Image, Text, View, FlatList } from 'react-native';
import RestaurantItem from "../../components/RestaurantItem/item";
import { useState, useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Restuarant } from '../../models';
// import restaurants from "../../../assets/data/restaurants.json"
export default function HomeScreen() {
    const [restaurants, setRestaurants] = useState([])
    //long line
    // const fetchRestaurants = async () => {
    //     const results = await DataStore.query(Restuarant)
    //     setRestaurants(results)
    // }
    useEffect(() => {
        //do anything
        DataStore.query(Restuarant).then((results) => setRestaurants(results))
    }, [])
    return (
        <View style={styles.page}>
            {/* container restaurant item */}
            <FlatList data={restaurants}
                renderItem={({ item }) => <RestaurantItem restaurant={item} />}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    page: {
        padding: 10,
        paddingVertical: 30
    }
});
