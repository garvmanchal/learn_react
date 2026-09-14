// import { useState } from "react"
// use state is an hook thats lets a component remember and update data


// import {Greet, Usercard } from "./components/demo"
// import Counter from "./components/count"
// import Clock from  "./components/clock"
// import Searchbox from "./components/searchbox"
// import Cpp from "./components/themecontext"
import {Outlet} from 'react-router-dom'
import Navbar from "./components/Navbar"


const App = () => {
  return (
    <div>
     <Navbar/>


     <Outlet/>

     
    </div>
  )
}

export default App 


