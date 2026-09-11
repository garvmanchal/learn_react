import { createContext, useContext } from "react"


const ThemeContext = createContext("light")

function Cpp(){
    return (
        <ThemeContext.Provider value = "dark">
          <Toolbar />
        </ThemeContext.Provider>
    )

}

function Toolbar(){
    const theme = useContext(ThemeContext)
    return <div className = {theme}>Current theme: {theme}</div>

}

export default Cpp