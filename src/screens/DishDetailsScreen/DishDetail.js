import { View, Text, StyleSheet } from 'react-native'
import restaurants from "../../../assets/data/restaurants.json"
import { AntDesign } from '@expo/vector-icons';
import { useState } from 'react';
const DishDetailsScreen = () => {
    const dish = restaurants[0].dishes[0]
    const [qty, setQty] = useState(1)
    const onMinus = () => {
        if (qty > 1) {

            setQty(qty - 1)
        }
    }
    const onPlus = () => {
        setQty(qty + 1)
    }
    const getTotalPrice = () => {
        return (dish.price * qty).toFixed(2)
    }
    return (
        <View style={styles.page}>
            <Text style={styles.title}>{dish.name}</Text>
            <Text style={styles.description}>{dish.description}</Text>
            <View style={styles.separator} />
            <View style={styles.row}>
                <AntDesign name="minuscircleo" size={60} color="black" onPress={onMinus} />
                <Text style={styles.qty}>{qty}</Text>
                <AntDesign name="pluscircleo" size={60} color="black" onPress={onPlus} />
            </View>
            <View style={styles.button}>
                <Text style={styles.buttonText}> Add {qty} to Basket · $ {getTotalPrice()}</Text>
            </View>
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
    qty: {
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