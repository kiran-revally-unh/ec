import { View, Text, StyleSheet, Pressable } from 'react-native'
// import restaurants from "../../../assets/data/restaurants.json"
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useEffect } from 'react';
import { DataStore } from 'aws-amplify';
import { Dish } from '../../models';
import { ActivityIndicator } from 'react-native-paper';
import { useBasketContext } from '../../contexts/BasketContext';
const DishDetailsScreen = () => {
    const navigation = useNavigation()
    // const dish = restaurants[0].dishes[0]
    const [dish, setDish] = useState(null)
    const [quantity, setquantity] = useState(1)
    const route = useRoute()
    const { addDishToBasket } = useBasketContext()
    const id = route.params?.id
    useEffect(() => {
        if (id) {
            DataStore.query(Dish, id).then(setDish)
        }
    }, [id])
    const onMinus = () => {
        if (quantity > 1) {

            setquantity(quantity - 1)
        }
    }
    const onPlus = () => {
        setquantity(quantity + 1)
    }
    if (!dish) {
        return <ActivityIndicator size={'large'} color='gray' style={{ alignItems: 'center', justifyContent: 'center', marginTop: 50, paddingVertical: 30 }} />
    }
    const getTotalPrice = () => {
        return (dish.price * quantity).toFixed(2)
    }
    const onAddToBasket = async () => {
        await addDishToBasket(dish, quantity)
        navigation.goBack();
    }
    return (
        <View style={styles.page}>
            <Text style={styles.title}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <View style={styles.separator} />
            <View style={styles.row}>
                <AntDesign name="minuscircleo" size={60} color="black" onPress={onMinus} />
                <Text style={styles.quantity}>{quantity}</Text>
                <AntDesign name="pluscircleo" size={60} color="black" onPress={onPlus} />
            </View>
            <Pressable onPress={onAddToBasket} style={styles.button}>
                <Text style={styles.buttonText}> Add {quantity} to Basket · $ {dish.price ? getTotalPrice() : 0}</Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
        width: "100%",
        paddingVertical: 40,//temp fix
        padding: 10,
    },
    title: {
        fontSize: 30,
        fontWeight: '600',
        marginVertical: 10,
    },
    separator: {
        height: 1,
        backgroundColor: 'lightgray',

    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 50
    },
    quantity: {
        fontSize: 25,
        marginHorizontal: 20
    },
    button: {
        backgroundColor: 'black',
        marginTop: 'auto',
        padding: 20,
        alignItems: 'center'
    },
    buttonText: {
        fontWeight: '600',
        fontSize: 20,
        color: 'white'
    }

})

export default DishDetailsScreen