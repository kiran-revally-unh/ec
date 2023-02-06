import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Basket, BasketDish } from "../models";
import { useAuthContext } from "./AuthContext";
const BasketContext = createContext({});

const BasketContextProvider = ({ children }) => {
    const [basket, setBasket] = useState(null)
    const [restaurant, setRestaurant] = useState(null)
    const [basketDishes, setBasketDishes] = useState([])
    const { sub, dbUser } = useAuthContext()


    useEffect(() => {
        DataStore.query(Basket, b => b.restuarantID.eq(restaurant.id).userID.eq(dbUser.id)).then(basket => setBasket(basket[0]))
    }, [dbUser, restaurant])

    useEffect(() => {
        if (basket) {
            // DataStore.query(BasketDish, (bd) => bd.basketID.eq(basket.id)).then(setBasketDishes)
            DataStore.query(BasketDish, (basket_dishes) => basket_dishes.basketID.eq(basket.id)).then(setBasketDishes)
        }
    }, [basket])

    const addDishToBasket = async (dish, quantity) => {
        let theBasket = basket || (await createNewBasket());
        // get the existing busket or create a new one
        //create a basketdish item and sa ve to datastore
        const newDish = await DataStore.save(new BasketDish({ quantity, Dish: dish, basketID: theBasket.id }))
        setBasketDishes([...basketDishes, newDish])

    }
    const createNewBasket = async () => {
        const newBasket = await DataStore.save(new Basket({ userID: dbUser.id, restuarantID: restaurant.id }))
        setBasket(newBasket)
        return newBasket;
    }
    return (
        <BasketContext.Provider value={{ addDishToBasket, setRestaurant, basket, basketDishes }}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext)