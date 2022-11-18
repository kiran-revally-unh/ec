import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Image, Text, View, FlatList } from 'react-native';
import BasketScreen from './src/screens/BasketScreen/BasketScreen';
import DishDetailsScreen from './src/screens/DishDetailsScreen/DishDetail';
import HomeScreen from "./src/screens/HomeScreen/index"
import OrderScreen from './src/screens/OrderScreen/OrderScreen';
import OrdersDetails from './src/screens/OrdersDetailsScreen/OrdersDetails';
import RestaurantDetails from './src/screens/RetaurantDetailsScreen/RestaurantDetails';
export default function App() {

  return (
    <View style={styles.container}>
      {/* container restaurant item */}
      {/* <HomeScreen /> */}
      {/* <RestaurantDetails /> */}
      {/*<BasketScreen /> */}
      {/* <DishDetailsScreen /> */}
      {/* <OrderScreen /> */}
      <OrdersDetails />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    // padding: 10,
    // paddingVertical: 30
  },
});
