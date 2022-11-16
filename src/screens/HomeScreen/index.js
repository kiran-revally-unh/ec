
import { StyleSheet, Image, Text, View, FlatList } from 'react-native';
import RestaurantItem from "../../components/RestaurantItem/item";
import restaurants from "../../../assets/data/restaurants.json"
export default function HomeScreen() {

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
