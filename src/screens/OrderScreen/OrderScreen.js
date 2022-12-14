import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import orders from '../../../assets/data/orders.json'
import OrderItem from '../../components/OrderItem/OrderItem'
const OrderScreen = () => {
    return (
        <View style={styles.orderContainer}>
            <FlatList data={orders} renderItem={({ item }) => {
                return (<OrderItem order={item} />)
            }} />

        </View>
    )
}

const styles = StyleSheet.create({
    orderContainer: {
        width: "100%",
        flex: 1,
    },
})
export default OrderScreen