import { createContext, useEffect } from "react";
import { useState, useContext } from "react";
import { DataStore } from "aws-amplify";
import { User } from "../models";
// take use from auth module from aws 

import { Auth } from "aws-amplify";
//  hanlde auth
const AuthContext = createContext({

})

const AuthContextProvider = ({ children }) => {
    const [authUser, setAuthUser] = useState(null)
    const [dbUser, setDbUser] = useState(null)
    //sub user is the sub id of coginito user that signup in aws
    const sub = authUser?.attributes?.sub;
    useEffect(() => {
        //take the user that corrently using app
        //bypassCache is using to make request from server
        Auth.currentAuthenticatedUser({ bypassCache: true }).then(setAuthUser)
    }, [])
    useEffect(() => {
        // because the user response as array 
        DataStore.query(User, (user) => user.sub.eq(sub)).then((users) => setDbUser(users[0]))
    }, [sub])

    return (
        <AuthContext.Provider value={{ authUser, dbUser, sub, setDbUser }}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthContextProvider;
export const useAuthContext = () => useContext(AuthContext)