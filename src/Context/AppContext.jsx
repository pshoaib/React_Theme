import { useState } from "react";
import { createContext } from "react";


export const AppContext = createContext()

export const AppContextProvider =({children})=>
{
    const [state , setState] = useState("dark")

    const toggleState =()=>
    {
        setState(state === "dark"? "light": "dark")
    }
   return( <AppContextProvider value ={[state , toggleState]}>
        {children}
    </AppContextProvider>)
}