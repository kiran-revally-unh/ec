import { View, Text, StyleSheet, Image, FlatList } from 'react-native'
import orders from '../../../assets/data/orders.json'
const OrdersDetails = () => {
    const order = orders[0]
    return (
        <View style={styles.page}>

            <FlatList data={orders}
                ListHeaderComponent={<View style={styles.menuContainer}>
                    <Image source={{ uri: order.Restaurant.image }} style={styles.image} resizeMode="cover" />
                    <View style={styles.container}>
                        <Text style={styles.title}>{order.Restaurant.name}</Text>
                        <Text style={styles.subtitle}>$ {order.status} · 2 days ago</Text>
                    </View>
                    <Text style={styles.menuTitle}>Your Orders</Text>
                </View>}
                renderItem={({ item }) => {
                    return (
                        <View style={styles.row}>
                            <View style={styles.qtyContainer}>
                                <Text>1</Text>
                            </View>
                            <Text style={{ marginLeft: 5, fontSize: 15, fontWeight: '500' }}>{item.Restaurant.name}</Text>
                            <Text style={{ marginLeft: 'auto', fontSize: 15 }}>$ · {item.Restaurant.price}38</Text>
                        </View>
                    )
                }} />
        </View>
    )
}

const styles = StyleSheet.create({
    page: {
        flex: 1
    },
    image: {
        width: "100%",
        aspectRatio: 5 / 3,
        marginBottom: 5,
        borderRadius: 10
    },
    title: {
        fontSize: 20,
        fontWeight: "600",
        marginVertical: 10
    },
    subtitle: {
        color: "#52552",
        fontSize: 15
    },
    container: {
        margin: 10
    },
    menuTitle: {
        fontSize: 20,
        letterSpacing: 0.4,
        fontWeight: '600',
        paddingHorizontal: 5,
        margin: 5
    },
    menuContainer: {
        borderBottomColor: 'lightgray',
        borderWidth: 1
    },
    row: {
        margin: 10,
        paddingHorizontal: 10,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        borderBottomColor: 'lightgray',
        borderBottomWidth: 1,
        padding: 2,
        borderBottomEndRadius: 3,
        marginBottom: 4,
        borderStartColor: "lightgray",
        paddingBottom: 3
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
    },
    qtyContainer: {
        backgroundColor: 'lightgray',
        paddingHorizontal: 5,
        paddingVertical: 2,
        margin: 2,
        borderRadius: 3
    }

})
export default OrdersDetails