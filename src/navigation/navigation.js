import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BasketScreen from '../screens/BasketScreen/BasketScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import DishDetailsScreen from '../screens/DishDetailsScreen/DishDetail';
import HomeScreen from "../screens/HomeScreen/index"
import OrderScreen from '../screens/OrderScreen/OrderScreen';
import OrdersDetails from '../screens/OrdersDetailsScreen/OrdersDetails';
import RestaurantDetails from '../screens/RetaurantDetailsScreen/RestaurantDetails';
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Screen name='Home' component={HomeScreen} />
            <Stack.Screen name='Restaurant' component={RestaurantDetails} options={{ headerShown: false }} />
            <Stack.Screen name='Order' component={OrderScreen} />
            <Stack.Screen name='Basket' component={BasketScreen} />
            <Stack.Screen name='OrderDetail' component={OrdersDetails} />
            <Stack.Screen name='DishDetail' component={DishDetailsScreen} />
        </Stack.Navigator>
    )
}

export default RootNavigator;