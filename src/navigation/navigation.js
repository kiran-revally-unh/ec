import { createNativeStackNavigator } from '@react-navigation/native-stack'
import BasketScreen from '../screens/BasketScreen/BasketScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs'
import DishDetailsScreen from '../screens/DishDetailsScreen/DishDetail';
import HomeScreen from "../screens/HomeScreen/index"
import OrderScreen from '../screens/OrderScreen/OrderScreen';
import OrdersDetails from '../screens/OrdersDetailsScreen/OrdersDetails';
import RestaurantDetails from '../screens/RetaurantDetailsScreen/RestaurantDetails';
// expo icon
import { Entypo } from '@expo/vector-icons';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import ProfileScreen from '../screens/ProfileScreen/ProfileScreen';

//the reason we create Profile on stack screen is to show the profile screen to the new signup user
import { useAuthContext } from '../contexts/AuthContext';
const Stack = createNativeStackNavigator();

const RootNavigator = () => {
    const { dbUser } = useAuthContext()
    return (
        <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false }}>
            {
                dbUser ? (

                    <Stack.Screen name='HomeTabs' component={HomeTabs} />
                ) :
                    (<Stack.Screen name='Profile' component={ProfileScreen} />)
            }
            {/* <Stack.Screen name='Order' component={OrderScreen} />
            <Stack.Screen name='OrderDetail' component={OrdersDetails} /> */}
        </Stack.Navigator>
    )
}

const Tab = createMaterialBottomTabNavigator();

const HomeTabs = () => {
    return (
        <Tab.Navigator barStyle={{ backgroundColor: '#ffff' }} screenOptions={{ headerShown: false }}>
            <Tab.Screen name='HomeTab' component={HomeStackNavigator} options={{ tabBarIcon: ({ color }) => <Entypo name="home" size={24} color={color} /> }} />
            <Tab.Screen name='OrderTab' component={OrderStackNavigator} options={{ tabBarIcon: ({ color }) => <MaterialIcons name="list-alt" size={24} color={color} /> }} />
            <Tab.Screen name='ProfileTab' component={ProfileScreen} options={{ tabBarIcon: ({ color }) => <FontAwesome name="user" size={24} color={color} /> }} />
        </Tab.Navigator>
    )
}
const HomeStack = createNativeStackNavigator();
const HomeStackNavigator = () => {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen name='Restaurants' component={HomeScreen} />
            <HomeStack.Screen name='Restaurant' component={RestaurantDetails} options={{ headerShown: false }} />
            <HomeStack.Screen name='Dish' component={DishDetailsScreen} />
            <HomeStack.Screen name='Basket' component={BasketScreen} />
        </HomeStack.Navigator>
    )
}

const OrderStack = createNativeStackNavigator();
const OrderStackNavigator = () => {
    return (
        <OrderStack.Navigator>
            <OrderStack.Screen name='Orders' component={OrderScreen} />
            <OrderStack.Screen name='Order' component={OrdersDetails} />
        </OrderStack.Navigator>
    )
}
export default RootNavigator;