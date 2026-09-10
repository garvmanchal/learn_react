// import { useState } from "react"
// use state is an hook thats lets a component remember and update data


import {Greet, Usercard } from "./components/demo"
import Counter from "./components/count"
import Clock from  "./components/clock"
import Searchbox from "./components/searchbox";
import Cpp from "./components/themecontext";


const App = () => {
  return (
    <div>
      <Greet />
      <Usercard name = "Garv" role =  "AI Engineer"/>
      <Counter/>
      <Clock/>
      <Searchbox/>
      <Cpp/>
    </div>
  );
};

export default App ;


