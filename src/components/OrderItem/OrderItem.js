import { View, Text, Image, StyleSheet, Pressable } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
const OrderItem = ({ order }) => {
    const navigation = useNavigation()
    return (
        <Pressable onPress={() => navigation.navigate("Order", { id: order.id })} style={styles.orderItem}>
            <Image source={{ uri: order.Restaurant.image }} style={styles.orderImg} />

            <View style={styles.orderDetail}>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>{order.Restaurant.name}</Text>
                <View style={styles.txtDetail}>
                    <Text style={styles.text}>items · {order.Restaurant.deliveryFee.toFixed(2)}</Text>
                    <Text style={styles.text}>{order.createdAt} · {order.status}</Text>
                </View>

            </View>
        </Pressable>
    )
}
const styles = StyleSheet.create({
    orderItem: {
        marginVertical: 20,
        flexDirection: 'row',
        paddingVertical: 10,
        paddingHorizontal: 10,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1
    },
    orderImg: {
        aspectRatio: 1,
        height: 75,

    },
    orderDetail: {
        flex: 1,
        flexDirection: 'column',
        marginLeft: 10
    },
    txtDetail: {
        color: 'gray',
        padding: 4
    },
    text: {
        color: 'gray',
        fontSize: 14
    }
})

export default OrderItem