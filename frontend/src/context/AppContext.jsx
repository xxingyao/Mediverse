import { createContext } from "react";
import { doctors } from "../assets/assets";

export const appContext  = createContext()

const AppContextProvider = (props) => {

    const currencySymbol = '$'

    const value = {
        doctors,
        currencySymbol
    }

    return (
        <appContext.Provider value={value}>
            {props.children}
        </appContext.Provider>
    )

}

export default AppContextProvider