// import { useState } from "react"
// use state is an hook thats lets a component remember and update data


import {Greet, Usercard} from "./components/demo"


const App = () => {
  return (
    <div>
      <Greet />
      <Usercard name = "Garv" role =  "AI Engineer"/>
    </div>
  );
};

export default App ;


