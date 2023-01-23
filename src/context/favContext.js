import { createContext, useContext, useState } from "react";



const AppContext = createContext(null);


export const useAppContext = () => {
    const context = useContext(AppContext);

    if (context === undefined) {
        throw new Error("AppContextProvider is technical Error");
    }
    return context;
}


 export const AppContextProvider = ({ children }) => {

    const [addFav, setAddFav] = useState([])


    const addToFav = (res) => {

        const oldOne = [...addFav];
        const newOne = oldOne.concat(res);
        setAddFav(newOne);
    }

 

    const removeToFav = (id) => {

        const removeOne = [...addFav];
        const removeNewOne = removeOne.filter((res) => res.id !== id);
        setAddFav(removeNewOne)
    }




    return (
        <AppContext.Provider value={{addFav,addToFav,removeToFav}} >
            {children}
        </AppContext.Provider >
    )
}

