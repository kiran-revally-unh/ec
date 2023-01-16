import { createContext, useState, useEffect, useContext } from "react";
import { DataStore } from "aws-amplify";
import { Basket, BasketDish } from "../models";
import { useAuthContext } from "./AuthContext";
const BasketContext = createContext({});

const BasketContextProvider = ({ children }) => {
    const [basket, setBasket] = useState(null)
    const [restaurant, setRestaurant] = useState(null)
    const { sub } = useAuthContext()


    const addDishToBasket = (dish, quantity) => {
        // get the existing busket or create a new one 


        //create a basketdish item and save to datastore


    }
    return (
        <BasketContext.Provider value={{ addDishToBasket, setRestaurant }}>
            {children}
        </BasketContext.Provider>
    )
}

export default BasketContextProvider;

export const useBasketContext = () => useContext(BasketContext)